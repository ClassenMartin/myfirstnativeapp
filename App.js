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
// key={uuidv4()} 



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
    // setTexts('');

  };
// DELETE LIST BUTTON
// deletes the whole list
  const handleClear = () => {
    setTexts([{}]);
  };

  //RESET CHORES COUNT BUTTON
  //resets chore list
  const handleSubmit1 = () => {
    setDone(0)
  }

  //DELETE SINGLE ITEM BUTTON
// deletes single to do 
  const handleDelete = (idx) => {
    let copy = [...texts];
    copy.splice(idx, 1);
    setTexts(copy);
    setDone(done +1)
   
    if (done === 4  ){
      Alert.alert(`Get yourself a beer! 5 chores done!`);
      Vibration.vibrate(4000);
    };
    if (done === 9 ){
      Alert.alert(`Get yourself a beer! 10 chores done!`);
    };
    if (done === 14 ){
       Alert.alert(`Get yourself a beer! 15 chores done!`);
    };
    if (done === 19 ){
      Alert.alert(`Get yourself a beer! 20 chores done!`);
      // Vibration.vibrate([100,200,300],true);
    };
  };


  // reset chores reset button



  // useEffect(() = => {setDone}, [])

  // A reset button for the chores



  return( <SafeAreaView style={styles.container}>
    <ScrollView>
              <View>
                <View style={styles.top}>
                <Text style={styles.heading}>
                  TO DO LIST</Text>
                {/* <Text style={styles.text}>{text}</Text> */}
                <View style={styles.buttonContainer}> 
                  <View style={styles.button}> 
                    <Button
                      onPress={handleClear}
                      title="DELETE LIST!"
                      color="#841584"
                      accessibilityLabel="Learn more about this purple button"
                    />
                  </View> 

                  <View style={styles.button}>
                    <Button
                      onPress={handleSubmit1}
                      title="RESET CHORES COUNT!"
                      color="#841584"
                      accessibilityLabel="Learn more about this purple button"
                    />

                  </View>
{/* reset chores button */}
                   <View style={styles.button}>
                    <Button
                      onPress={handleSubmit}
                      title="ADD CHORES!"
                      color="#841584"
                      accessibilityLabel="Learn more about this purple button"
                    />
                  </View>
                </View>
              </View>
              <View style={styles.middle}>
                
              <TextInput placeholder="..." style={styles.input} onChangeText={(text) => setText(text)} />
              </View>
              </View>

              <View style={styles.todoSection}>
              {texts.length > 0 && 
              texts.map((ele, idx) => (
              <View key={uuid.v4()} style={styles.toDoField}>



              <View style={styles.round}><Text style={styles.text}>{idx+1} </Text></View>
              <View style={styles.underline}><Text style={styles.text}>{ele}</Text></View>
              <View style={styles.done}><Button onPress={() => handleDelete(idx)} title='Done!' color='black'/></View>
              </View>
          
              ))}          
              </View>
              <View style={styles.end}>
              <View><Text style={styles.textcounter}>You completed <Text style={styles.counterNumber}>{done}</Text> chores today!!!</Text></View>
              {/* <View style={styles.button}>
                    <Button
                      onPress={handleSubmit1}
                      title="RESET CHORES!"
                      color="#841584"
                      accessibilityLabel="Learn more about this purple button"
                    />

                  </View> */}
              </View>
              </ScrollView>
  </SafeAreaView>
  );
}


// orange        #FF8552
// black         black
// creamwhite    #FFFFF0

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
    borderWidth: 1,
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

    // toDoField: {
    // borderColor: 'black',
    // borderWidth: 2,
    // alignSelf:'stretch',
    // },

    toDoField: {
      flexDirection:'row',
      justifyContent: 'space-between',
      marginTop:10,
      borderColor: 'black',
      backgroundColor: 'white',
    },

    round: {
      backgroundColor:'black',
      borderRadius: 30,
      width:60,
      height:60,
      backgroundColor: 'white',
      borderColor: 'black',
      borderWidth: 2,

    },

    underline: {
      backgroundColor:'white',
      flexShrink:1,
      marginHorizontal:5,

    },

    done: {
      backgroundColor:'black',
      borderRadius: 30,
      width:60,
      height:60,
      backgroundColor: 'white',
      borderColor: 'black',
      borderWidth: 2,
      
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

