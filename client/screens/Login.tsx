import React, { FC, useRef, useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Button,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Animated,
  KeyboardAvoidingView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../firebase';

import LottieView from 'lottie-react-native';
import coins from '../assets/lottie/coins.json';
import coinImg from '../assets/logos/CoinImage.png';

const Login: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errormsg, seterrormsg] = useState('');

  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate('PortfolioMain');
      }
    });
    return unsubscribe;
  }, []);

  // Firebase

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user.email);
      })
      .catch((error) => {
        seterrormsg('Please enter valid details...');

        console.log(error);
      });
  };

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log('logged in: ', user.email);
      })
      .catch((error) => {
        seterrormsg('Please enter valid details...');

        console.log(error);
      });
    setEmail('');
    setPassword('');
  };

  const progress = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image source={coinImg} style={styles.logo} />
      </View>

      <KeyboardAvoidingView style={styles.formcontainer}>
        <Text style={styles.text}>{errormsg} </Text>

        <TextInput
          onChangeText={(val) => setEmail(val)}
          value={email}
          style={styles.userInput}
          placeholder='Email...'
          placeholderTextColor='#cdebf9'
          blurOnSubmit={true}
          keyboardAppearance='dark'
          keyboardType='email-address'
        />
        <TextInput
          onChangeText={(val) => setPassword(val)}
          value={password}
          style={styles.userInput}
          placeholder='Password...'
          keyboardAppearance='dark'
          placeholderTextColor='#cdebf9'
          secureTextEntry={true}
        />
        <View style={styles.buttonArea}>
          <TouchableOpacity onPress={handleLogin} style={styles.loginButtons}>
            <Text style={styles.text}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSignUp} style={styles.loginButtons}>
            <Text style={styles.text}>Register</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
      <View>
        <LottieView
          progress={progress}
          source={coins}
          style={styles.lottie}
          speed={0.3}
          autoPlay
          loop
        />
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#000',
  },
  formcontainer: { marginBottom: 20 },

  buttonArea: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  loginButtons: {
    padding: 10,
    borderWidth: 2,
    borderColor: '#BFD7ED',
    marginHorizontal: 10,
    letterSpacing: 2,
    color: '#fff',
    width: 120,
    marginTop: 10,
    borderRadius: 20,
  },

  lottie: { width: 100, height: 250, marginBottom: 20 },

  logo: { width: 400, height: 200, borderRadius: 40, marginTop: 10 },

  logoArea: {
    justifyContent: 'center',
    alignItems: 'center',

    paddingBottom: 70,
  },

  userInput: {
    padding: 25,
    borderWidth: 2,
    borderColor: '#BFD7ED',
    width: 300,
    letterSpacing: 2,
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Chivo_400Regular',
    margin: 20,
    borderRadius: 20,
  },

  text: {
    color: '#cdebf9',
    textAlign: 'center',
    fontFamily: 'Chivo_400Regular',
    marginVertical: 15,
    fontSize: 19,
    letterSpacing: 1,
  },
});
