import { StyleSheet, Text, View } from 'react-native';

export default function InicioScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Conversor de Moedas</Text>

      <Text style={styles.texto}>
        Consulte moedas, salve suas favoritas e realize conversões usando
        taxas atualizadas.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#8A1C4A',
    marginBottom: 20,
  },
  texto: {
    fontSize: 17,
    textAlign: 'center',
    lineHeight: 25,
  },
});
