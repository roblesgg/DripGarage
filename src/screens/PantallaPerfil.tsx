import React from 'react';
import {Text, StyleSheet, ImageBackground} from 'react-native';

const PantallaPerfil = () => {
  return (
    
    <ImageBackground source={require('../../assets/fondo2.png')} style={styles.pantalla} resizeMode='cover'> 
      <Text style={styles.textoPerfil}>Perfil</Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({

  textoPerfil: {
    position: 'absolute', // Hace que el texto flote y no le importen las reglas de la caja
    top: 30,              // Lo clava a 60 píxeles del techo
    color: '#ffffff',
    fontFamily: 'Montserrat-Bold',
    fontSize: 25,
    fontWeight: 'bold',
  },
  pantalla: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// IMPORTANTÍSIMO: Exportar la pantalla para que App.tsx pueda "llamarla"
export default PantallaPerfil;