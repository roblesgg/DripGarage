import React from 'react';

// 1. Importamos las herramientas principales de navegación
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// 2. Importamos tus pantallas desde la nueva carpeta src
import PantallaLogin from './src/screens/PantallaLogin';
import PantallaGarage from './src/screens/PantallaGarage';

// 3. Creamos el contenedor de rutas (Stack)
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    // NavigationContainer siempre debe envolver toda la aplicación
    <NavigationContainer>
      {/* Navigator gestiona el historial de pantallas. Le decimos que arranque en "Login" */}
      <Stack.Navigator initialRouteName="Login">
        
        {/* Registramos la pantalla de Login */}
        <Stack.Screen 
          name="Login" 
          component={PantallaLogin} 
          options={{ headerShown: false }} // Oculta la barra superior por defecto de Android
        />

        {/* Registramos la pantalla del Garaje */}
        <Stack.Screen 
          name="Garage" 
          component={PantallaGarage} 
          options={{ headerShown: false }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;