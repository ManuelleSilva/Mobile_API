import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ScrollView, ImageBackground} from 'react-native';

const request = async (callback) => {
  const response = await fetch('https://swapi.dev/api/starships/');
  const parsed = await response.json();
  callback(parsed.results);
};

export default function App() {
  const [registros, setRegistros] = useState([]);

  useEffect(() => {
    request(setRegistros);
  }, []);


  return (
    <ImageBackground
      source={require('./assets/images/Bg.png')}
      style={styles.background}
    >
    <View style={styles.container}>
      <Text style={styles.title}>Usando API do Star Wars</Text>
      <FlatList
        data={registros}
        keyExtractor={(item) => item.name.toString()}
        renderItem={({ item }) =>
          <Text style={styles.items}>
            <Text style={styles.item1}>Nave: {item.name} {'\n'}</Text>
            <Text style={styles.item2}>Modelo: {item.model} {'\n'}</Text>
            <Text style={styles.item3}>Usando:{item.manufacturer} {'\n'}</Text>
          </Text>
        }
      />

      <StatusBar style="auto" />
    </View></ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    marginTop: 22,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    marginTop:20,
    fontSize: 30,
    marginBottom:15,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor:'#000'
  },
  items:{
    alignItems: 'left',
    margin: 3,
    backgroundColor: '#dfb911',
    borderRadius: 5,
    paddingLeft: 5,
    paddingTop:5,
  },
  item1:{
    fontSize:18,
    fontWeight:'bold',
  }
});
