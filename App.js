import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import Exstyles from './style'

const App = () => {

  return (
    <View>
      <Text style={{ fontSize: 30, padding: 30, backgroundColor: 'red' }}>Applying styles in native</Text>

      <Text style={styles.textBox}>Styles in React</Text>
      <Text style={[Exstyles.textBox,{margin:'6'}]}>Styles in React</Text>
      <Text style={styles.textBox}>Styles in React</Text>

    </View>
  );
};
const styles = StyleSheet.create({
  textBox: {
    borderRadius:9,
    fontSize: 40,
    backgroundColor:'gold',
    padding: 35,
    margin:10,
    color: 'blue',
    textAlignVertical:'center',
    textAlign:'center',
    borderColor:'black',
    borderWidth:4
  }
})


export default App
//here we use double object in style part.. because outer is for style object inner is for jsx and this type of using style is called inline style which is directly use inside a component
//When we make style for one specific component and in same file that is called internal style, `create` is An identity function for creating style sheets.

