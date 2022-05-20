import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView, Image, ScrollView,Pressable } from 'react-native';

export const Button = ({title}) => {
  return(
    <Pressable 
    style={{backgroundColor: 'black', padding: 10, alignItems: 'center', marginTop:10}}
    onPress={()=>{alert("pressed")}}
    >
      <Text style={{color: 'white'}}>{title}</Text>
    </Pressable>
  )
}

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{height:60, backgroundColor: "blue"}}>
          <Text style={{color: 'white', padding:20}}> Hello Guys Chaee Pee Loo </Text>
        </View>

        <View style={{height:60, backgroundColor: "green"}}>
          <Text style={{
            fontSize:20, 
            color: "white", 
            fontWeight: 'bold', 
            padding:10}}>
              Hello Guys Chaee Pee Loo
          </Text>
        </View>
        
        <View style={{marginTop: 50, marginLeft: 40}}>
          <Image  source={require('./assets/favicon.png')} style={{height:210, width:210, marginTop:20}}/>
          <Image  resizeMode = "cover" source={{uri:"https://picsum.photos/200"}} style={{height:210, width:210, marginTop:20}}/>
        </View>
            {/* Button Creation */}
        
        <Button title= "Press"/>
        <Button title= "2nd Button"/>

        <View>
          <Text>
          Generating random paragraphs can be an excellent way for writers to get their creative flow going at the beginning of the day. The writer has no idea what topic the random paragraph will be about when it appears. This forces the writer to use creativity to complete one of three common writing challenges. The writer can use the paragraph as the first one of a short story and build upon it. A second option is to use the random paragraph somewhere in a short story they create. The third option is to have the random paragraph be the ending paragraph in a short story. No matter which of these challenges is undertaken, the writer is forced to use creativity to incorporate the paragraph into their writing.
          Generating random paragraphs can be an excellent way for writers to get their creative flow going at the beginning of the day. The writer has no idea what topic the random paragraph will be about when it appears. This forces the writer to use creativity to complete one of three common writing challenges. The writer can use the paragraph as the first one of a short story and build upon it. A second option is to use the random paragraph somewhere in a short story they create. The third option is to have the random paragraph be the ending paragraph in a short story. No matter which of these challenges is undertaken, the writer is forced to use creativity to incorporate the paragraph into their writing.
          Generating random paragraphs can be an excellent way for writers to get their creative flow going at the beginning of the day. The writer has no idea what topic the random paragraph will be about when it appears. This forces the writer to use creativity to complete one of three common writing challenges. The writer can use the paragraph as the first one of a short story and build upon it. A second option is to use the random paragraph somewhere in a short story they create. The third option is to have the random paragraph be the ending paragraph in a short story. No matter which of these challenges is undertaken, the writer is forced to use creativity to incorporate the paragraph into their writing.
          Generating random paragraphs can be an excellent way for writers to get their creative flow going at the beginning of the day. The writer has no idea what topic the random paragraph will be about when it appears. This forces the writer to use creativity to complete one of three common writing challenges. The writer can use the paragraph as the first one of a short story and build upon it. A second option is to use the random paragraph somewhere in a short story they create. The third option is to have the random paragraph be the ending paragraph in a short story. No matter which of these challenges is undertaken, the writer is forced to use creativity to incorporate the paragraph into their writing.
          </Text>
        </View>
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
});
