import { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import InicioScreen from '../screens/InicioScreen';
import SobreScreen from '../screens/SobreScreen';
import MoedasScreen from '../screens/MoedasScreen';
import FavoritasScreen from '../screens/FavoritasScreen';
import ConverterScreen from '../screens/ConverterScreen';
import { buscarMoedas } from '../services/api';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function AbasMoedas() {
  const [moedas, setMoedas] = useState([]);
  const [favoritas, setFavoritas] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState('');

  useEffect(() => {
    carregarMoedas();
  }, []);

  async function carregarMoedas() {
    try {
      setCarregando(true);
      setErro('');

      const lista = await buscarMoedas();
      setMoedas(lista);
    } catch (erro) {
      setErro('Não foi possível carregar as moedas.');
    } finally {
      setCarregando(false);
    }
  }

  function alternarFavorita(codigo) {
    if (favoritas.includes(codigo)) {
      const novaLista = favoritas.filter((item) => item !== codigo);
      setFavoritas(novaLista);
    } else {
      setFavoritas([...favoritas, codigo]);
    }
  }

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#8A1C4A',
      }}
    >
      <Tab.Screen
        name="Lista de moedas"
        options={{
          tabBarLabel: 'Moedas',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cash-outline" color={color} size={size} />
          ),
        }}
      >
        {() => (
          <MoedasScreen
            moedas={moedas}
            favoritas={favoritas}
            alternarFavorita={alternarFavorita}
            carregando={carregando}
            erro={erro}
          />
        )}
      </Tab.Screen>

      <Tab.Screen
        name="Moedas favoritas"
        options={{
          tabBarLabel: 'Favoritas',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="star-outline" color={color} size={size} />
          ),
        }}
      >
        {() => (
          <FavoritasScreen
            favoritas={favoritas}
            alternarFavorita={alternarFavorita}
          />
        )}
      </Tab.Screen>

      <Tab.Screen
        name="Converter moeda"
        options={{
          tabBarLabel: 'Converter',
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="swap-horizontal-outline"
              color={color}
              size={size}
            />
          ),
        }}
      >
        {() => <ConverterScreen moedas={moedas} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

export default function Navegacao() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveTintColor: '#8A1C4A',
        headerTintColor: '#222222',
      }}
    >
      <Drawer.Screen
        name="Início"
        component={InicioScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        }}
      />

      <Drawer.Screen
        name="Sobre"
        component={SobreScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons
              name="information-circle-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="Moedas"
        component={AbasMoedas}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="cash-outline" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
