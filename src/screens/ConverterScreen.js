import { useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

import { converterMoeda } from '../services/api';

export default function ConverterScreen({ moedas }) {
  const [origem, setOrigem] = useState('USD');
  const [destino, setDestino] = useState('BRL');
  const [valor, setValor] = useState('');
  const [resultado, setResultado] = useState(null);
  const [carregando, setCarregando] = useState(false);

  const listaMoedas =
    moedas.length > 0 ? moedas : ['USD', 'BRL', 'EUR'];

  async function realizarConversao() {
    const valorNumero = Number(valor.replace(',', '.'));

    if (!valor || valorNumero <= 0) {
      Alert.alert('Atenção', 'Digite um valor válido.');
      return;
    }

    try {
      setCarregando(true);
      setResultado(null);

      const dados = await converterMoeda(origem, destino, valorNumero);
      setResultado(dados);
    } catch (erro) {
      Alert.alert('Erro', 'Não foi possível realizar a conversão.');
    } finally {
      setCarregando(false);
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Converter moedas</Text>

      <Text style={styles.label}>Moeda de origem</Text>
      <View style={styles.seletor}>
        <Picker selectedValue={origem} onValueChange={setOrigem}>
          {listaMoedas.map((codigo) => (
            <Picker.Item key={codigo} label={codigo} value={codigo} />
          ))}
        </Picker>
      </View>

      <Text style={styles.label}>Moeda de destino</Text>
      <View style={styles.seletor}>
        <Picker selectedValue={destino} onValueChange={setDestino}>
          {listaMoedas.map((codigo) => (
            <Picker.Item key={codigo} label={codigo} value={codigo} />
          ))}
        </Picker>
      </View>

      <Text style={styles.label}>Valor</Text>
      <TextInput
        style={styles.input}
        value={valor}
        onChangeText={setValor}
        placeholder="Digite o valor"
        keyboardType="decimal-pad"
      />

      <Pressable style={styles.botao} onPress={realizarConversao}>
        <Text style={styles.textoBotao}>Converter</Text>
      </Pressable>

      {carregando && (
        <ActivityIndicator
          size="large"
          color="#8A1C4A"
          style={styles.carregando}
        />
      )}

      {resultado && (
        <View style={styles.resultado}>
          <Text style={styles.tituloResultado}>Resultado</Text>
          <Text>
            Valor de origem: {valor} {origem}
          </Text>
          <Text>
            Valor de destino:{' '}
            {Number(resultado.valorConvertido).toFixed(2)} {destino}
          </Text>
          <Text>Taxa de conversão: {resultado.taxa}</Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 25,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  seletor: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
    marginBottom: 20,
  },
  botao: {
    backgroundColor: '#8A1C4A',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  carregando: {
    marginTop: 20,
  },
  resultado: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 8,
    marginTop: 20,
    gap: 8,
  },
  tituloResultado: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
