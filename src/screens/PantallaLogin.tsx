import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const PantallaBienvenida = ({ navigation }: any) => {
  const insets = useSafeAreaInsets();

  return (
    <ImageBackground source={require('../../assets/fondo.png')} style={styles.pantalla} resizeMode='cover'> 
      
      {/* 1. Título */}
      <View style={styles.cajaTitulo}>
        <Text style={styles.textoDrip}>Drip</Text>
        <Text style={styles.textoGarage}>Garage</Text>
      </View>

      {/* 2. Botón Entrar: Solo dejamos la matemática dinámica arriba */}
      <TouchableOpacity 
        style={[styles.botonEntrar, { bottom: 150 + insets.bottom }]} 
        onPress={() => navigation.replace('Principal')}
      >
        <Text style={styles.textoBoton}>Entrar</Text>
      </TouchableOpacity>

      {/* 3. Logo DripDev: Solo dejamos la matemática dinámica arriba */}
      <Image 
        source={require('../../assets/DripDevLogo.png')} 
        style={[styles.logoDrip, { bottom: 30 + insets.bottom }]} 
        resizeMode="contain"
      />

    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  pantalla: {
    flex: 1, 
    alignItems: 'center', 
    paddingTop: 100, 
  },
  cajaTitulo: {
    alignItems: 'center',
  },
  textoDrip: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#000000',
    fontFamily: 'Montserrat-Bold', 
  },
  textoGarage: {
    fontSize: 90,
    color: '#000000',
    marginTop: -10, 
    fontFamily: 'Montserrat-Bold', 
    fontWeight: 'bold',
  },
  botonEntrar: {
    position: 'absolute',    
    backgroundColor: '#1E1E1E', 
    paddingVertical: 15, 
    paddingHorizontal: 60, 
    borderRadius: 30, 
    borderWidth: 2,           
    borderColor: '#555555',   
    elevation: 8,             
  },
  textoBoton: {
    fontSize: 22, 
    color: '#FFFFFF', 
    fontFamily: 'Montserrat-Bold', 
    textTransform: 'uppercase', 
    letterSpacing: 2, 
    includeFontPadding: false,
  },
  logoDrip: {
    position: 'absolute',     
    width: 80,                
    height: 80,              
  }
});

export default PantallaBienvenida;