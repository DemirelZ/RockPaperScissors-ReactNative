import {
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {COLOR} from './src/utils/constant';
import {choises} from './src/data/mockData.js';

const App = () => {
  const [userChoise, setUserChoise] = useState(null);
  const [computerChoise, setComputerChoise] = useState(null);
  const [result, setResult] = useState(null);


  const handleGame =(oneOfThree)=>{

    

  }



  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.container}>
        <Text style={styles.title}>ROCK PAPER SCISSORS</Text>
        <Text style={styles.usersChoise}>User's Choise</Text>
        <View style={styles.choises}>
          {choises?.map(choise => (
            <TouchableOpacity style={styles.button} onPress={handleGame(choise)}>
              <Image source={choise.image} style={styles.image} />
            </TouchableOpacity>
          ))}
        </View>
        <Text style={styles.title}>KAZANDIN!!!</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.backgroungcolor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: '900',
    marginVertical: 20,
  },
  usersChoise: {
    color: 'white',
    marginVertical: 20,
    fontSize: 20,
  },
  choises: {

    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },
  button:{
    width: 90,
    height: 90,
    alignItems:'center',
    justifyContent:'center',
    margin:3,
    padding:10,
    backgroundColor:'white',
    borderRadius:10
    

  },
  image: {
    width: '100%',
    height: '100%',

    margin: 5,
  },
});
