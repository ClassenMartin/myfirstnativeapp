import React, {useState} from 'react';
import { StyleSheet,
  Text, 
  View, 
  Button, 
  TextInput,
  SafeAreaView,
  ScrollView,
  useEffect,
Alert,
Vibration } from 'react-native';
import uuid from 'react-native-uuid';
import { PaperProvider } from 'react-native-paper';
import { IconButton } from "react-native-paper";







// First react native app
export default function App() {
  const [text, setText] = useState('')
  const [texts, setTexts]= useState([])
  const [done, setDone]= useState(0)
  
 
// ADD CHORSE BUTTON
  const handleSubmit = () => {
    if(text) {
      setTexts([...texts, text]); 
    }  
    setText('')
  };

// DELETE COMPLETE LIST BUTTON
  const handleClear = () => {
    createTwoButtonAlert()
  };
  const createTwoButtonAlert = () =>
  Alert.alert('Delete list?', 'Delete the WHOLE list?', [
    {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    {text: 'OK', onPress: () => setTexts([])},
  ]);

  //RESET CHORES COUNT BUTTON
  const handleSubmit1 = () => {
    alertDeleteChores()
  };
  const alertDeleteChores = () =>
  Alert.alert('Reset chores counter?', 'Reset your completed chores?', [
    {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    {text: 'OK', onPress: () => setDone(0)},
  ]);



  //DELETE SINGLE ITEM BUTTON
  const handleDelete = (idx) => {
    let copy = [...texts];
    copy.splice(idx, 1);
    setTexts(copy);
    setDone(done +1)
    let donecount = done +1
    console.log(done)
    if ((donecount%5)===0 && done >= 1) {
      Alert.alert(`Get yourself a beer! ${donecount} chores done!`);
    };
  };




  return( <PaperProvider>
  <SafeAreaView style={styles.container}>
    <ScrollView>
              <View>
                <View style={styles.top}>
                <Text style={styles.heading}>
                  TO DO LIST</Text>
                <View style={styles.buttonContainer}> 
                  <View style={styles.button}> 
                  <IconButton icon="delete-forever" 
                      size={50} 
                      iconColor="black"
                      onPress={handleClear}
                    />
                  </View> 
                  <View style={styles.button}>
                    <Button
                      onPress={handleSubmit1}
                      title="RESET CHORES COUNT"
                      color="#841584"
                    />
                  </View>
{/* reset chores button */}
                   <View style={styles.button}>
                   <IconButton icon="note-plus" 
                    size={50} 
                      iconColor="black"
                      onPress={handleSubmit}      
                    />
                  </View>
                </View>
              </View>
              <View style={styles.middle}>
              <TextInput placeholder="..." style={styles.input} onChangeText={(text) => setText(text)} value={text} />
              </View>
              </View>
              <View style={styles.todoSection}>
              {texts.length > 0 && 
              texts.map((ele, idx) => (
              <View key={uuid.v4()} style={styles.toDoField}>
              <View style={styles.round}><Text style={styles.text}>{idx+1} </Text></View>
              <View style={styles.underline}><Text style={styles.text}>{ele}</Text></View>
              <View style={styles.done}><IconButton icon="delete-variant" size={50} iconColor="black" onPress={() => handleDelete(idx)} /></View>
              </View>
              ))}   
              </View> 
              <View style={styles.end}>
              <View><Text style={styles.textcounter}>You completed <Text style={styles.counterNumber}>{done}</Text> chores today!!!</Text>
              </View>
              </View>
              </ScrollView>
             
  </SafeAreaView>
  </PaperProvider>
  );
}

const styles = StyleSheet.create({
  // GENERAL
    text:{
    fontSize:50,
    color:'black'
    },

  // TOP 1/4
    top: {
    backgroundColor:'#39393A',
    alignItems: 'center',
    paddingBottom:10,
    },
    heading: {
      fontSize:50,
      fontWeight:'bold',
      color:'#FF8552'
      },

      buttonContainer: {
        flexDirection:'row',
        justifyContent:'space-around',
        alignSelf:'stretch',
        paddingHorizontal:3,
      
        },

      button:{ 
        backgroundColor:'white',
        borderColor:'black',
        borderWidth:2,
        height: 100,
        width: 100,
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center',

        },

  // TOP 2/4 

    middle: {
    alignItems: 'center',
    backgroundColor:'white',
    paddingBottom:10,
    },

    input:{
    marginTop:5,
    fontSize:50,
    height: 60, 
    borderColor: 'gray', 
    alignSelf:'stretch',
    marginHorizontal:5,
    // borderWidth: 1,
    textAlign: 'center',  
    },

    container: {
    backgroundColor: 'white',
    },

// TOP 3/4
    todoSection: {
    backgroundColor: 'white',
    paddingHorizontal: 5,
    
    },

    toDoField: {
      flexDirection:'row',
      justifyContent: 'space-between',
      marginTop:10,
      borderColor: 'black',
      backgroundColor: 'white',
    },

    round: {
   

    },

    underline: {
      backgroundColor:'white',
      flexShrink:1,
      marginHorizontal:5,

    },

    done: {
 
      
    },
    // TOP 4/4


end: {
  paddingTop:10,
  paddingBottom:20,
  backgroundColor: 'white',

},

// counter: {

// },

textcounter: {
  textAlign:'center'
},

counterNumber: {
fontSize: 50,
}

    })

