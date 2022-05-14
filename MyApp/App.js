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
    width: '100%',
    height: '50%',
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 10,
    borderColor:'red',
    borderRadius: 20,

  },
  text: {
    color: 'black',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10,
    textTransform: 'uppercase',
  },
  button : {
    width:10,
    height:20,
  },
});

export default App;
