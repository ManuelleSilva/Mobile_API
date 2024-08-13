import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';

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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 22,
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    marginTop:20,
    fontSize: 30,
    marginBottom:15,
    fontWeight: 'bold',
    color: '#fff'
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
