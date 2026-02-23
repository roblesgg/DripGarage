import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 

import { 
  IconoGaraje, 
  IconoProductos, 
  IconoMantenimientos, 
  IconoCalendario, 
  IconoPerfil 
} from './src/components/Iconos';

// Importamos todas las pantallas
import PantallaLogin from './src/screens/PantallaLogin';
import PantallaGarage from './src/screens/PantallaGarage';
import PantallaCalendario from './src/screens/PantallaCalendario';
import PantallaPerfil from './src/screens/PantallaPerfil';
import PantallaMantenimientos from './src/screens/PantallaMantenimientos';
import PantallaProductos from './src/screens/PantallaProductos';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Función externa limpia para elegir el icono
const renderTabBarIcon = ({ route, color, focused }: any) => {
  let tamaño = focused ? 40 : 30; // Si lo tocas, se hace un poco más grande
  
  if (route.name === 'Garage') return <IconoGaraje color={color} size={tamaño} />;
  if (route.name === 'Productos') return <IconoProductos color={color} size={tamaño} />;
  if (route.name === 'Mantenimientos') return <IconoMantenimientos color={color} size={tamaño} />;
  if (route.name === 'Calendario') return <IconoCalendario color={color} size={tamaño} />;
  if (route.name === 'Perfil') return <IconoPerfil color={color} size={tamaño} />;
};

// Creamos el bloque del Menú Inferior con sus 5 botones
function NavBar() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false, // Quitamos la barra de arriba fea
        tabBarShowLabel: false, // ¡AQUÍ ES DONDE DEBE IR! Apaga las letras
        tabBarIcon: ({ color, focused }) => renderTabBarIcon({ route, color, focused }),
        tabBarStyle: {
          backgroundColor: '#313131', 
          borderRadius: 50,            
          position: 'absolute',       
          height: 80,
          borderTopWidth: 0,          
          bottom: 30,               
          marginHorizontal: 20,     
          paddingBottom: 0, 
          paddingTop: 0,
          elevation: 0,
          shadowOpacity: 0,
        },
        tabBarItemStyle: {
          marginHorizontal: 10, // Tu espacio entre botones
          paddingTop: 20, // Sube un poco los iconos para que estén centrados
          paddingBottom: 10, // Baja un poco los iconos para que estén centrados
        },
        tabBarActiveTintColor: '#ffffff', // Color del icono cuando estás en esa pestaña
        tabBarInactiveTintColor: '#888888', // Color de los iconos inactivos
      })}
    >
      <Tab.Screen name="Garage" component={PantallaGarage} />
      <Tab.Screen name="Productos" component={PantallaProductos} />
      <Tab.Screen name="Mantenimientos" component={PantallaMantenimientos} />
      <Tab.Screen name="Calendario" component={PantallaCalendario} />
      <Tab.Screen name="Perfil" component={PantallaPerfil} />
    </Tab.Navigator>
  );
}

// El enrutador principal
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={PantallaLogin} options={{ headerShown: false }} />
        
        <Stack.Screen 
          name="Principal" 
          component={NavBar} 
          options={{ headerShown: false, animation: 'fade' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}