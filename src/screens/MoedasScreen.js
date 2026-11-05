import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import MoedaItem from '../components/MoedaItem';

export default function MoedasScreen({
  moedas,
  favoritas,
  alternarFavorita,
  carregando,
  erro,
}) {
  if (carregando) {
    return (
      <View style={styles.centro}>
        <ActivityIndicator size="large" color="#8A1C4A" />
        <Text>Buscando moedas...</Text>
      </View>
    );
  }

  if (erro) {
    return (
      <View style={styles.centro}>
        <Text style={styles.erro}>{erro}</Text>
      </View>
    );
  }

  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.lista}
      data={moedas}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        <MoedaItem
          codigo={item}
          favorita={favoritas.includes(item)}
          onPressFavorita={() => alternarFavorita(item)}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  lista: {
    padding: 15,
  },
  centro: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  erro: {
    color: '#B00020',
    textAlign: 'center',
  },
});
