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

  const handleUserChoice = userChoice => {
    setUserChoise(userChoice);
    randomComputerChoice(userChoice);
  };

  const randomComputerChoice = userChoice => {
    const randomIndex = Math.floor(Math.random() * choises.length);
    const computerChoice = choises[randomIndex];
    setComputerChoise(computerChoice);
    determineWinner(userChoice, computerChoice);
    // console.log('Computer Choice:', computerChoice);
    // console.log('User Choice:', userChoice);
  };

  const determineWinner = (user, computer) => {
    if (user.name === computer.name) {
      setResult('DRAW!!');
    } else if (
      (user?.name === 'Taş' && computer?.name === 'Makas') ||
      (user?.name === 'Kağıt' && computer?.name === 'Taş') ||
      (user?.name === 'Makas' && computer?.name === 'Kağıt')
    ) {
      setResult('WIN!!');
    } else {
      setResult('LOST!!');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.container}>
        <Text style={styles.title}>ROCK PAPER SCISSORS</Text>
        <Text style={styles.usersChoise}>User's Choise:</Text>
        <View style={styles.choises}>
          {choises?.map(choise => (
            <TouchableOpacity
              key={choise.id}
              style={
                choise?.name === userChoise?.name
                  ? [styles.button, styles.active]
                  : styles.button
              }
              onPress={() => handleUserChoice(choise)}>
              <Image source={choise.image} style={styles.image} />
            </TouchableOpacity>
          ))}
        </View>
        <Text style={styles.title}>{result}</Text>
        <Text style={styles.usersChoise}>Computer's Choise:</Text>
        {computerChoise && (
          <View style={styles.button}>
            <Image style={styles.image} source={computerChoise.image} />
          </View>
        )}
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
  button: {
    width: 90,
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: '100%',

    margin: 5,
  },
  computerImage: {
    width: 90,
    height: 90,
  },
  active: {
    borderWidth: 4,
    borderColor: 'red',
  },
});
