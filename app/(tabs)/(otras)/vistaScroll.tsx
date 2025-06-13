import React from 'react';
import { Image, ScrollView, StyleSheet, Text } from 'react-native';

const vistaScroll = () => (
  <ScrollView>
    <Text>Image 1</Text>
    <Image source= {{ uri: 'https://avatars.githubusercontent.com/u/128342488?v=4'}} style={styles.image} />
    <Text>Image 2</Text>
    <Image source= {{ uri: 'https://avatars.githubusercontent.com/u/128342488?v=4'}} style={styles.image} />
    <Text>Image 3</Text>
    <Image source= {{ uri: 'https://avatars.githubusercontent.com/u/128342488?v=4'}} style={styles.image} />
    <Text>Image 4</Text>
    <Image source= {{ uri: 'https://avatars.githubusercontent.com/u/128342488?v=4'}} style={styles.image} />
  </ScrollView>
);

const styles = StyleSheet.create({
  image: {
    width: 500,
    height: 500
  },
});

export default vistaScroll;
