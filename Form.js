import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView, TextInput, Button, Alert } from 'react-native';

export function Form({navigation}) {

  let [firstName, setFirstName] = React.useState("");
  let [lastName, setLastName] = React.useState("");
  let [comment, setComment] = React.useState("");

  const showAlert = () => {
    Alert.alert(
      "Thank you!",
      `We appreciate your feedback ${firstName} ${lastName}. Hope you enjoy the app!`,
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );
  }

  return (
    <SafeAreaView style={styles.container}>
        <ScrollView>
          <Text style={{fontSize: 30, fontWeight: 'bold', color: '#ECC798', textDecorationLine: 'underline', textAlign: 'center', marginTop: 50}}>Send us your FEEDBACK!</Text>
          <Text style={styles.text} >First Name:</Text>
          <TextInput 
            style={styles.border} 
            placeholder="Write here"
            onChangeText={text => setFirstName(text)}>
          </TextInput>
          <Text style={styles.text}>Last Name:</Text>
          <TextInput 
            style={styles.border} 
            placeholder="Write here"
            onChangeText={text => setLastName(text)}>
          </TextInput>
          <Text style={styles.text}>Comment:</Text>
          <TextInput 
            style={styles.border} 
            placeholder="Write here"
            onChangeText={text => setComment(text)}>
          </TextInput>
          <View style={{marginTop:30, marginLeft:30, marginRight:30}}>
            <Button title="Send" color="#ECC798" onPress={showAlert}/>
          </View>
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
  text:{
    marginTop: 30,
    marginLeft: 30,
    marginRight: 30,
  },
  border:{
    borderColor: "#000",
    borderWidth: 1,
    marginTop: 10,
    marginLeft: 30,
    marginRight: 30,
    // paddingLeft: 30,
    // paddingRight: 30
    padding: 10
  },
});
