import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView  } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={{flex:1}}>
        <View style={{
          flex:1, 
          justifyContent: 'spac', 
          // alignItems: "center", // cross axis
          flexDirection: 'row',  //main axis -> colum
          flexWrap: "wrap"
          }}
        >
          <View style={styles.view1}/>       
          <View style={styles.view2}/>
          <View style={styles.view3}/>
          <View style={styles.view4}/>
          <View style={styles.view5}/>
          
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  view1 : {
    height:100,
    width:100,
    backgroundColor: 'red'
  },
  view2 : {
    height:100,
    width:150,
    backgroundColor: 'blue'
  },
  view3 : {
    height:100,
    width:150,
    backgroundColor: 'green'
  },
  view4 : {
    height:100,
    width:100,
    backgroundColor: 'yellow'
  },
  view5 : {
    height:100,
    width:300,
    backgroundColor: 'black'
  }
});
