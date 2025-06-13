import React from 'react'
import { View, Text } from 'react-native'

type SaludoProps = {
    nombre: string
}

// Componente hijo
const SaludoHijo = (props: SaludoProps) => {
    return(
        <View>
            <Text>Hola, {props.nombre}</Text>
        </View>
    )
}

// Componente padre
const Saludos = () => {
    return(
        <View>
            <SaludoHijo nombre='Paula'/>
            <SaludoHijo nombre='David'/>
            <SaludoHijo nombre='Ricardo'/>
        </View>
    )
}

export default Saludos;
