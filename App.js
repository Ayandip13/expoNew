import React, { useState } from "react";
import { Text, View, TextInput, Button, StyleSheet } from "react-native";

const App = () => {
  const [name, setname] = useState("")
  const [age, setage] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [display, setDisplay] = useState(false)

  const reset = () => {
    setDisplay(false)
    setage("")
    setemail("")
    setname("")
    setpassword("")
  }


  return (
    <View>
      <Text style={{ fontSize: 50, color: 'red', padding: 5 }}>Enter your Details</Text>
      <TextInput value={name} style={styles.TextInput} onChangeText={(text) => setname(text)} placeholder="Name..." />
      <TextInput style={styles.TextInput} onChangeText={(age) => setage(age)} placeholder="Your age" />
      <TextInput style={styles.TextInput} onChangeText={(mail) => setemail(mail)} placeholder="Your email" />
      <TextInput style={styles.TextInput} secureTextEntry={true} onChangeText={(pass) => setpassword(pass)} placeholder="Set a password" />

      <View style={{ margin: 5 }}>
        <Button title="Print details" onPress={() => setDisplay(true)} />
      </View>
      <Button title="Clear all" onPress={reset} />

      <View>{
        display ?
          <View>
            <Text style={styles.Text} >Your name : {name}</Text>
            <Text style={styles.Text} >Age : {age}</Text>
            <Text style={styles.Text} >Email : {email} </Text>
            <Text style={styles.Text} >password is - {password} </Text>
          </View>
          : null
      }
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  TextInput: {
    fontSize: 18,
    color: 'violet',
    borderWidth: 3,
    borderColor: 'blue',
    margin: 5,
    padding: 3,
    borderRadius: 9
  },
  Text: {
    fontSize: 30,
    color: "gray",
    padding: 5
  }
})

export default App

