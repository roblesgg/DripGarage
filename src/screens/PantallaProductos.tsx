import React from 'react';
import {Text, StyleSheet, ImageBackground} from 'react-native';

const PantallaProductos = () => {
  return (
    
    <ImageBackground source={require('../../assets/fondo2.png')} style={styles.pantalla} resizeMode='cover'> 
      <Text style={styles.textoProductos}>Productos</Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({

  textoProductos: {
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
export default PantallaProductos;