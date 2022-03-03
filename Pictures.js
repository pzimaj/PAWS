import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView, Button, TextInput } from 'react-native';

export function Pictures({navigation}) {

  let [dog, setDog] = React.useState("");
  let [text, setText] = React.useState("");
  let [errorMessage, setErrorMessage] = React.useState("");

  const loadPage = () => {
    setDog("https://www.xn--vnementiel-96ab.net/wp-content/uploads/2014/02/default-placeholder.png");
  }

  React.useEffect(() => {
    loadPage();
  }, [])

  const loadBreed = (breedName) => {
    if(breedName === ""){
      setErrorMessage("The text fiel was left empty! Please input a breed.");
    }
    else{
      setErrorMessage("")
      return fetch(`https://dog.ceo/api/breed/${breedName.toLowerCase()}/images/random`)
      .then(response => response.json())
      .then(breeds => {
        setDog(breeds.message);
      })
      .catch(error => 
        console.log(error)
      );
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={{fontSize: 30, fontWeight: 'bold', color: '#ECC798', textDecorationLine: 'underline', textAlign: 'center', marginTop: 50}}>Dog BREEDS!</Text>
        <Text style={{marginLeft: 30, marginRight: 30, textAlign: 'center', fontWeight: 'bold'}}>Search for dog breeds and look at their pictures</Text>
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <TextInput 
            style={styles.border} 
            placeholder="Write here"
            onChangeText={text => setText(text)}>
          </TextInput>
          <View style={{marginTop:10}}>
            <Button title="Search" color="#ECC798" onPress={()=> loadBreed(text)}/>
          </View>
        </View>
        <Text style={{marginLeft: 50, fontStyle: 'italic'}}>e.x. akita, boxer, hound, bullterrier, etc...</Text>
        <Text style={{color: 'red', textAlign:'center'}}>{errorMessage}</Text>
        <Image style={styles.image} source={{uri: dog}}/>
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
    width: 300,
    height: 300,
    paddingTop: 300,
    resizeMode: "contain",
    alignSelf: "center"
  },
  border:{
    borderColor: "#000",
    borderWidth: 1,
    marginTop: 10,
    marginLeft: 50,
    marginRight: 10,
    paddingLeft: 30,
    paddingRight: 30
  },
});
