import React from 'react';
import {Text, StyleSheet, ImageBackground} from 'react-native';

const PantallaGaraje = () => {
  return (
    
    <ImageBackground source={require('../../assets/fondo2.png')} style={styles.pantalla} resizeMode='cover'> 
      <Text style={styles.textoDrip}>Drip</Text>
      <Text style={styles.textoGarage}>Garage</Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({

  textoDrip: {
    position: 'absolute', // Hace que el texto flote y no le importen las reglas de la caja
    top: 25,              // Lo clava a 60 píxeles del techo
    color: '#ffffff',
    fontFamily: 'Montserrat-Bold',
    fontSize: 25,
    fontWeight: 'bold',
  },
    textoGarage: {
    position: 'absolute', // Hace que el texto flote y no le importen las reglas de la caja
    top: 40,              // Lo clava a 60 píxeles del techo
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
export default PantallaGaraje;