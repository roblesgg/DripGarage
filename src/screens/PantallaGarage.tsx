import React from 'react';
import {Text, StyleSheet, ImageBackground} from 'react-native';

const PantallaGaraje = () => {
  return (
    
    <ImageBackground source={require('../../assets/fondo2.png')} style={styles.pantalla} resizeMode='cover'> 
      <Text style={styles.titulo}>Mi Garaje</Text>
      <Text style={styles.subtitulo}>Aquí irán tus coches</Text>
  
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  pantalla: {
    flex: 1,
    alignItems: 'center',
    justifyContent:s 'center',
  },
  titulo: {
    color: '#FFFFFF',
    letterSpacing: 2,
    fontSize: 35,
    fontFamily: 'Montserrat-Bold',
  },
  subtitulo: {
    color: '#A9A9A9',
    fontSize: 18,
    marginTop: 10,
  }
});

// IMPORTANTÍSIMO: Exportar la pantalla para que App.tsx pueda "llamarla"
export default PantallaGaraje;