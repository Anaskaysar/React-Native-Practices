/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState} from 'react';
//import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Button,
  Linking,
  View,
} from 'react-native';

const App = () => {
  const [name,setName] = useState('Kaysar');
  const [session,setSession] = useState({number:6,title:'State'});

  const onClickhandler = ()=>{
    setName('Programming By kaysar');
    setSession({number:7,title:'Style'});
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.text}>This is session number {session.number} and about {session.title}</Text>
      {/* <Button style={styles.button} title="YoutubeChannel" onPress={()=>{Linking.openURL('https://www.youtube.com/channel/UC7pqe_6PQgKUblulGqGFN8g');}} /> */}
      <Button title="Update State" onPress={onClickhandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'red',
    text: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10,
  },
  button : {
    marginTop:10,
    marginBottom : 20,
  },
});

export default App;
