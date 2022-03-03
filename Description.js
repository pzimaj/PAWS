import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView } from 'react-native';

export function Description({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text 
        style={{fontSize: 30, fontWeight: 'bold', color: '#ECC798', textDecorationLine: 'underline', textAlign: 'center', marginTop: 50}}>More about DOGS!</Text>
        <Text style={{marginLeft: 30, marginRight: 30, textAlign: 'center', fontWeight: 'bold'}}>What makes them man's best friend?</Text>
        <Text style={{marginTop: 30, marginLeft: 30, marginRight: 30, textAlign: 'justify'}}>
          Arguably, the most popular animal in the world, dogs are nutorious for being a friendly and caring animal.
          They are great partners and are a frequent pet amongst families.
        </Text>
        <Image style={styles.image} source={require('./assets/doggy_friends.jpg')}/>
        <Text style={styles.text}>
          Dogs were domesticated by wolves 15,000 years ago. Now, there are a lot of breeds of dogs all very different
          from each other. They are very social animals and crave affection from the owner. These are some reasons why
          people frequently choose dogs as their pets.
        </Text>
        <Image style={styles.image} source={require('./assets/artsy_doggy.jpg')}/>
        <Text style={styles.text}>
          They are also used in many jobs. They are frequently used by the police and are trained to notice different sents
          of illegal substances. They are also used by blind people in order to lead them. There are many ways in which dogs
          can be used because of their sense of smell and the ability to be trained quickly.
        </Text>
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
    height: 250,
    width: 250,
    resizeMode: "contain",
    alignSelf: "center"
  },
  text:{
    marginLeft: 30,
    marginRight: 30, 
    textAlign: 'justify'
  }
});
