import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
  SafeAreaProvider,
  SafeAreaView,
} from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

import Navegacao from './src/navigation/Navegacao';

export default function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaProvider>
        <SafeAreaView style={styles.safeArea}>
          <NavigationContainer>
            <Navegacao />
          </NavigationContainer>

          <StatusBar style="dark" />
        </SafeAreaView>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
});
