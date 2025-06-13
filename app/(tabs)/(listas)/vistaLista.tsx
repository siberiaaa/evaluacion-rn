import React from 'react';
import { FlatList, Text, View } from 'react-native';

const vistaLista = () => {
  return (
    <View>
      <FlatList
        data={[
            { key: 'Mango' },
            { key: 'Lechosa (papaya)' },
            { key: 'Guayaba' },
            { key: 'Patilla (sandía)' },
            { key: 'Melón' },
            { key: 'Níspero' },
            { key: 'Tamarindo' },
            { key: 'Merey (anacardo)' },
            { key: 'Mamón (quenepa)' },
            { key: 'Cereza criolla' },
            { key: 'Parchita (maracuyá)' },
            { key: 'Guanábana' },
            { key: 'Cambur (banano)' },
            { key: 'Plátano' },
            { key: 'Piña' },
            { key: 'Coco' },
            { key: 'Mora' },
            { key: 'Jobito' },
            { key: 'Uva de playa' },
            { key: 'Borojo' },
        ]}
        renderItem={({ item }) => <Text>{item.key}</Text>}
      />
    </View>
  );
};
export default vistaLista;
