import React from 'react';
import { SectionList, Text, View } from 'react-native';

const vistaLista = () => {
  return (
    <View>
      <SectionList
        sections={[
        {
            title: 'Mamíferos',
            data: ['León', 'Elefante', 'Delfín', 'Oso polar', 'Murciélago'],
        },
        {
            title: 'Aves',
            data: ['Águila', 'Pingüino', 'Colibrí', 'Flamenco', 'Búho'],
        },
        {
            title: 'Reptiles',
            data: ['Cocodrilo', 'Iguana', 'Tortuga marina', 'Serpiente pitón', 'Camaleón'],
        },
        {
            title: 'Anfibios',
            data: ['Rana arbórea', 'Salamandra', 'Sapo común'],
        },
        {
            title: 'Peces',
            data: ['Tiburón blanco', 'Caballito de mar'],
        },
        ]}
        renderItem={({ item }) => <Text style={{fontStyle: 'italic'}} >{item}</Text>}
        renderSectionHeader={({ section }) => <Text style={{fontSize: 20}}>{section.title}</Text>}
        keyExtractor={(item) => `basicListEntry-${item}`}
      />
    </View>
  );
};
export default vistaLista;
