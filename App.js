import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {

  const submit = () => {
    alert('Hello, world!')
    
}

  return (
    <View style={styles.container}>
 

<View>
    <Text style={styles.heading}>Mathematics Quiz App</Text>
    <Text style={styles.text}>Total questions : 10</Text>
    <Text style={styles.text}>Passing points: 70</Text>
    <Text style={styles.text}>Total time : 2 min</Text>
</View>

  
    <TouchableOpacity
     
        onPress={submit}
        style={styles.button}>
        <Text style={{ fontSize: 20, color: 'blue' }}>Start</Text>
      </TouchableOpacity>



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'blue'
  },
  heading: {
    color: 'white',
    marginBottom: 20,
    marginTop: 50,
    fontSize: 30,
    fontWeight: 600
  },
  text: {
    fontSize: 16,
    lineHeight: 40,
    color: 'white',
},
button: {
  display: 'block',
  paddingTop: 10,
  paddingBottom: 10,
  paddingLeft: 20,
  paddingRight: 20,
  border: 'none',
  backgroundColor:'white',
  color: 'blue',
  borderRadius: 100,
  transition: 0.5,
  fontSize: 20,
  fontWeight: 'bold',
  marginTop: 40
}
});
