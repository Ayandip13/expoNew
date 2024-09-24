import React, { useState } from "react";
import { Text, View, TextInput, Button, StyleSheet } from "react-native";

const App = () => {
  const [name, setname] = useState("")
  return (
    <View>
      <Text style={{ fontSize: 40, padding: 30, backgroundColor: 'lightblue' }}>Text input in native</Text>

      <Text style={{fontSize:35}}>Your name :{name}</Text>
      <TextInput style={styles.TextInput} value={name} onChangeText={(text)=>setname(text)} placeholder="Enter your name" />
        <Button title='Clear text' onPress={()=>setname('')} />
    </View> 
  );
};

const styles = StyleSheet.create({
  TextInput: { fontSize: 18,
    color: 'red',
    borderWidth: 3, 
    borderColor: 'blue', 
    margin: 5,
    padding:3 
  }
})

export default App

