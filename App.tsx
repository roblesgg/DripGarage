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
          backgroundColor: '#1E1E1E', // Mismo color de fondo que el botón (puedes volver al #313131 si lo prefieres)
          borderRadius: 40,            
          position: 'absolute',       
          height: 80,
          
          borderWidth: 2,             // Ponemos el borde de 2 píxeles en todos los lados
          borderColor: '#555555',     // Color gris metálico del borde
          borderTopWidth: 2,          // (IMPORTANTE: React Navigation a veces borra el borde de arriba, con esto lo forzamos)
          elevation: 8,               // Sombra nativa de Android para que la barra flote
          
          // --- SOMBRA PARA iOS (Por si acaso) ---
          shadowColor: '#000000',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.5,
          shadowRadius: 5,
          // ------------------------------------

          bottom: 30,               
          marginHorizontal: 20,     
          paddingBottom: 0, 
          paddingTop: 0,
        },
        tabBarIconStyle: {
          flex: 1,                  // Obliga a la caja del icono a usar todo el espacio (mata al fantasma)
          justifyContent: 'center', // Centra el SVG verticalmente
          alignItems: 'center',     // Centra el SVG horizontalmente
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