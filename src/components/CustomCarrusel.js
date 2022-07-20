import React, { Component } from 'react';
import {
  Image,
  View,
  Dimensions,
} from 'react-native';
import Carousel from 'react-native-looped-carousel';

const { width, height } = Dimensions.get('window');

const CustomCarrusel = () => {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      flexDirection: 'row'
    }}>
      <Carousel
        delay={5000}
        style={{ width: width - 40, height: 200 }}
        autoplay
        bullets
      >
        <Image style={{ width: width - 40, height: 200, borderRadius: 15 }} source={require('../../assets/hamburguesa.jpeg')} />
        <Image style={{ width: width - 40, height: 200, borderRadius: 15 }} source={require('../../assets/pizza.jpeg')} />
        <Image style={{ width: width - 40, height: 200, borderRadius: 15 }} source={require('../../assets/chifa.jpeg')} />
      </Carousel>
    </View>
  );
}

export default CustomCarrusel