import React from 'react';
// Importamos TouchableOpacity, que es el componente oficial para hacer botones táctiles
import { View, Text, StyleSheet, TouchableOpacity,ImageBackground} from 'react-native';

const PantallaBienvenida = ({ navigation }: any) => {
  return (
    // La caja principal que ocupa toda la pantalla
    <ImageBackground source={require('../../assets/fondo.png')} style={styles.pantalla} resizeMode='cover'> 
      
      {/* Caja de arriba para el título */}
      <View style={styles.cajaTitulo}>
        <Text style={styles.textoDrip}>Drip</Text>
        <Text style={styles.textoGarage}>Garage</Text>
      </View>

      {/* Caja de abajo para el botón */}
      <TouchableOpacity style={styles.botonEntrar} onPress={() => navigation.replace('Garage')}>
        <Text style={styles.textoBoton}>Entrar</Text>
      </TouchableOpacity>



    </ImageBackground>
  );
};

// Aquí viene la magia del diseño (Flexbox)
const styles = StyleSheet.create({
  pantalla: {
    flex: 1, // Ocupa toda la pantalla
    alignItems: 'center', // Centra todo en horizontal
    justifyContent: 'space-between', // ¡CLAVE! Empuja el título arriba y el botón abajo
    paddingTop: 100, // Espacio desde el borde de arriba
    paddingBottom: 80, // Espacio desde el borde de abajo
  },
  cajaTitulo: {
    alignItems: 'center',
  },
  textoDrip: {
    fontSize: 90,
    fontWeight: 'bold',
    color: '#000000',
    fontFamily: 'Montserrat-Bold', 
  },
  textoGarage: {
    fontSize: 60,
    color: '#000000',
    marginTop: -10, // Sube un poco la palabra para que estén más juntas
    fontFamily: 'Montserrat-Bold', 
    fontWeight: 'bold',
  },
botonEntrar: {
    backgroundColor: '#1E1E1E', // Un gris casi negro, muy elegante
    paddingVertical: 15, 
    paddingHorizontal: 60, 
    borderRadius: 30, 
    borderWidth: 2,           // Le añadimos un borde...
    borderColor: '#555555',   // ...de color gris metálico
    elevation: 8,             // Sombra nativa de Android para que flote
  },
  textoBoton: {
    fontSize: 22, // Un poco más pequeño pero más agresivo
    color: '#FFFFFF', // Letra blanca para contrastar
    fontFamily: 'Montserrat-Bold', 
    textTransform: 'uppercase', // TRUCO PRO: Fuerza que todo salga en MAYÚSCULAS
    letterSpacing: 2, // TRUCO PRO: Separa las letras un poco entre sí
    includeFontPadding: false,
  },
});

export default PantallaBienvenida;