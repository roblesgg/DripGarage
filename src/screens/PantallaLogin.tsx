import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image } from 'react-native';
// 1. Importamos la herramienta del Área Segura
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const PantallaBienvenida = ({ navigation }: any) => {
  // 2. Encendemos el radar para medir la pantalla
  const insets = useSafeAreaInsets();

  return (
    <ImageBackground source={require('../../assets/fondo.png')} style={styles.pantalla} resizeMode='cover'> 
      
      {/* Caja de arriba para el título */}
      <View style={styles.cajaTitulo}>
        <Text style={styles.textoDrip}>Drip</Text>
        <Text style={styles.textoGarage}>Garage</Text>
      </View>

      {/* Caja de abajo para el botón. Le sumamos los insets.bottom al bottom original de 150 */}
      <TouchableOpacity 
        style={[styles.botonEntrar, { bottom: 150 + insets.bottom }]} 
        onPress={() => navigation.replace('Principal')}
      >
        <Text style={styles.textoBoton}>Entrar</Text>
      </TouchableOpacity>

      {/* Logo de DripDev. Le sumamos los insets.bottom al bottom original de 30 */}
      <Image 
        source={require('../../assets/DripDevLogo.png')} 
      />

    </ImageBackground>
  );
};

// Aquí viene la magia del diseño (Flexbox)
const styles = StyleSheet.create({
  pantalla: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    paddingTop: 100, 
    paddingBottom: 80, 
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
    backgroundColor: '#1E1E1E', 
    paddingVertical: 15, 
    paddingHorizontal: 60, 
    borderRadius: 30, 
    borderWidth: 2,           
    borderColor: '#555555',   
    elevation: 8,             
    // Nota: He quitado el "bottom: 150" de aquí porque ahora se lo pasamos dinámicamente arriba en el TouchableOpacity
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
    width: 80, 
    height: 80, 
    position: 'absolute', 
  }
});

export default PantallaBienvenida;