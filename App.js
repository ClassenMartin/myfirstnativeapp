import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';


// First react native app
export default function App() {
  const [text, setText] = useState('')
  const [texts, setTexts]= useState([])

  const handleSubmit = () => {
    if(text) {
      setTexts([...texts, text]);
    }
  };



  const handleClear = () => {
    setTexts([{}]);
  };



  const handleDelete = (idx) => {
    let copy = [...texts];
    copy.splice(idx, 1);
    setTexts(copy);
  };












  return( <View style={styles.container}>
{/* <View style={styles.topContainer}/> */}

  <Text style={styles.text}>{text}</Text>
  <Button
  onPress={handleSubmit}
  title="Add to do!"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
  <TextInput style={styles.input} onChangeText={(text) => setText(text)} />


{texts.length > 0 && 
texts.map((ele, idx) => (
<Text style={styles.text}>{idx+1}. {ele}<Button onPress={() => handleDelete(idx)} title='Done!' color='black'/><View style={styles.box}>
<Text></Text>
</View> </Text>))}
<Button
  onPress={handleClear}
  title="Delete whole list!"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
  </View>
  );
}






{/* <View style={styles.box}>
<Text></Text>
</View> */}




const styles = StyleSheet.create({
  Button: {
    marginLeft: 50

  },

  // box: {
  //   flex: 1,

  // },
  container: {
    // flex: 1,
    marginTop: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    text: 50,
    height: 60, 
    borderColor: 'gray', 
    width:300,
    borderWidth: 1  
  },
  text:{
    fontSize:50,
    color:'red'
  },
  topContainer: {
    flex:1,
  }
})

