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
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';

const App = () => {
  const [Items, setItems]= useState([
    {key:1, item: 'Item 1'},
    {key:2, item: 'Item 2'},
    {key:3, item: 'Item 3'},
    {key:4, item: 'Item 4'},
    {key:5, item: 'Item 5'},
    {key:6, item: 'Item 6'},
    {key:7, item: 'Item 7'},
    {key:9, item: 'Item 8'},
    {key:10, item: 'Item 8'},
    {key:11, item: 'Item 8'},
    {key:12, item: 'Item 8'},
  ]);
  return (
    <View style={styles.body}>
      <ScrollView>
        {
          Items.map((object)=>{
            return (
              <View style={styles.item} key={object.key}>
                <Text style={styles.text}>{object.item}</Text>
              </View>
            );
          })
        }
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  text: {
    color: '#000000',
    fontSize: 35,
    margin: 10,
  },
  item :{
    margin:10,
    backgroundColor:'#4ae1fa',
    justifyContent:'center',
    alignItems: 'center',
   },
});

export default App;
