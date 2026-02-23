import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; //para la barra de nav

// 2. Importamos todas las pantallas
import PantallaLogin from './src/screens/PantallaLogin';
import PantallaGarage from './src/screens/PantallaGarage';
import PantallaHerramientas from './src/screens/PantallaProductos';
import PantallaCalendario from './src/screens/PantallaCalendario';
import PantallaPerfil from './src/screens/PantallaPerfil';
import PantallaMantenimientos from './src/screens/PantallaMantenimientos';
import PantallaProductos from './src/screens/PantallaProductos';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator(); // 3. Creamos el motor del menú

// 4. Creamos el bloque del Menú Inferior con sus 5 botones
function MenuPrincipal() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false, // Quitamos la barra de arriba fea
        tabBarStyle: {
        backgroundColor: '#313131', 
          borderRadius: 30,            
          position: 'absolute',       
          height: 60,
          borderTopWidth: 0,          
          bottom: 30,
          width: '90%',               // Ocupa el 90%
        },
        tabBarActiveTintColor: '#ffffff', // Color del texto cuando estás en esa pestaña
        tabBarInactiveTintColor: '#888888', // Color de las pestañas inactivas
      }}
    >
      <Tab.Screen name="Garage" component={PantallaGarage} />
      <Tab.Screen name="Productos" component={PantallaProductos} />
      <Tab.Screen name="Mantenimientos" component={PantallaMantenimientos} />
      <Tab.Screen name="Calendario" component={PantallaCalendario} />
      <Tab.Screen name="Perfil" component={PantallaPerfil} />
    </Tab.Navigator>
  );
}

// 5. El enrutador principal sigue siendo en "pila" (Stack)
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {/* Pantalla 1: El Login */}
        <Stack.Screen name="Login" component={PantallaLogin} options={{ headerShown: false }} />
        
        {/* Pantalla 2: En vez de ir solo al Garage, vamos al Menú completo */}
        <Stack.Screen 
          name="Principal" 
          component={MenuPrincipal} 
          options={{ headerShown: false, animation: 'fade' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}