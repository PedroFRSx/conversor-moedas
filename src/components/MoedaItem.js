import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function MoedaItem({ codigo, favorita, onPressFavorita }) {
  return (
    <View style={styles.item}>
      <Text style={styles.codigo}>{codigo}</Text>

      <Pressable onPress={onPressFavorita}>
        <Ionicons
          name={favorita ? 'star' : 'star-outline'}
          size={26}
          color={favorita ? '#F2B705' : '#777777'}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    marginBottom: 10,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  codigo: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
