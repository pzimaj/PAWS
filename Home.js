import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import {Info} from './Info.js';

export function Home({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.backgroundContainer}>
        <Image style={styles.background} source={require('./assets/doggy.jpg')} />
      </View>
      <Image style={styles.image} source={require('./assets/Paws_title.png')}/>
      <Button title="Get Started!" color="#ECC798" onPress={()=> navigation.navigate('Info')}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    width: 270,
    height: 270,
    resizeMode: "contain",
    alignSelf: "center"
  },
  background: {
      flex: 1, 
      width: null, 
      height: null
  },
  backgroundContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute'
  }, 
});
