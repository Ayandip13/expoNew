import React from "react";
import { Text, View, Button } from "react-native";

const name = "Ayandip"
function fruit() {
  return "apple"
}

const App = () => {
  const age = 46
  return (
    <View>
      <Text style={{ fontSize: 30 }}>Hey {name} you have logged in sucessfully, your age is {age} his favourite fr is {fruit()} {age > 18? "above 18" : "below 18"}</Text>
    </View>
  );
};
export default App
