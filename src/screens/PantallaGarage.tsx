import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PantallaGaraje = () => {
  return (
    <View style={styles.pantalla}>
      <Text style={styles.titulo}>Mi Garaje</Text>
      <Text style={styles.subtitulo}>Aquí irán tus coches</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  pantalla: {
    flex: 1,
    backgroundColor: '#1E1E1E', // Fondo oscuro DripGarage
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    color: '#FFFFFF',
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