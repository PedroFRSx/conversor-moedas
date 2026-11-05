import { StyleSheet, Text, View } from 'react-native';

export default function SobreScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Sobre</Text>

      <Text style={styles.texto}>
        Este aplicativo foi desenvolvido para consultar moedas e realizar
        conversões utilizando a ExchangeRate-API.
      </Text>

      <Text style={styles.texto}>
        Desenvolvido com React Native e Expo.
      </Text>

      <Text style={styles.autor}>Desenvolvido por Pedro Ferraz</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 25,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#8A1C4A',
    marginBottom: 25,
  },
  texto: {
    fontSize: 17,
    lineHeight: 25,
    marginBottom: 20,
  },
  autor: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
