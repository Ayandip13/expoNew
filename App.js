import React, {useState} from "react";
import { Text, View, Button } from "react-native";


//state is like a information holder within a componant
//we cannot use any state outside the component
const App = () => {
  function testname() {
    setname("Sayani")
  }
  const [name, setname] = useState("Ayandip");
  return (
    <View>
      <Text style={{fontSize: 30, padding: 30}}>React states with: {name}</Text>
      <Button title="Update" onPress={testname}/>
    </View>
  );
};
export default App
//we cannot share the data of any states from one components to another