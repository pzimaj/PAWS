import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView } from 'react-native';

export function Info({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={{fontSize: 30, fontWeight: 'bold', color: '#ECC798', textDecorationLine: 'underline', textAlign: 'center', marginTop: 50}}>Welcome to PAWS!</Text>
        <Text style={{marginLeft: 30, marginRight: 30, textAlign: 'center', fontWeight: 'bold'}}>A free application created for dog and animal fans alike!</Text>
        <Text style={{marginTop: 30, marginLeft: 30, marginRight: 30, textAlign: 'justify'}}>
          In this app, dog lovers will be able to find out even more information about different dog breeds.
          Not only will there be dog info, there will also be different pictures of different dog breeds. This
          app is great for any d0g pr animal lover that wants to look at cute dog pictures and learn more about
          the man's best friend. 
        </Text>
        <Image style={styles.image} source={require('./assets/lil_doggy.png')}/>
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
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
    width: 150,
    height: 150,
    paddingTop: 250,
    resizeMode: "contain",
    alignSelf: "center"
  }
});
