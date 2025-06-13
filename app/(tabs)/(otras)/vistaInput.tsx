import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';

const vistaInput = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');

  return (
    <View style={styles.vista}>
      <TextInput placeholder="Nombre" onChangeText={(text) => setNombre(text)} defaultValue={nombre} />
      <TextInput placeholder="Apellido" onChangeText={(text) => setApellido(text)} defaultValue={apellido} />
      
      <Text style={styles.texto}>
        Nombre es {nombre} y apellido es {apellido}
      </Text>
    </View>
  );
};


const styles = StyleSheet.create({
  vista: {
    flex: 1,
    backgroundColor: '#808080',
  },
  texto: {
    color: '#ffffff',
    fontSize: 10,
  },
});

export default vistaInput;
