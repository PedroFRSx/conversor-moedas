import { FlatList, StyleSheet, Text, View } from 'react-native';

import MoedaItem from '../components/MoedaItem';

export default function FavoritasScreen({
  favoritas,
  alternarFavorita,
}) {
  if (favoritas.length === 0) {
    return (
      <View style={styles.centro}>
        <Text>Nenhuma moeda foi adicionada aos favoritos.</Text>
      </View>
    );
  }

  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.lista}
      data={favoritas}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        <MoedaItem
          codigo={item}
          favorita
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
    padding: 25,
  },
});
