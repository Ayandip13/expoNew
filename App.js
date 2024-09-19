import React, { useState } from "react";
import { Text, View, Button } from "react-native";

const App = () => {
  const [name, setname] = useState("Ayandip")
  const [age, setage] = useState("22")
  return (
    <View>
      <Text style={{ fontSize: 30, padding: 30 }}>props in React</Text>
      <Button title="Update name" onPress={() => setname("Sayani")} />
      <Button title="Update age" onPress={() => setage("21")} />
      <User age={age} name={name} />
    </View>
  );
};

const User = (props) => {
  //console.warn();

  return (
    <View>
      <Text style={{ fontSize: 30, padding: 50 }} >Child component {props.name}</Text>
      <Text style={{ fontSize: 30, padding: 50 }} >Child component {props.age}</Text>
    </View>
  )
}

export default App
