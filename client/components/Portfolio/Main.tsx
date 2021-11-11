import React from 'react';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Keyboard,
  Button,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { auth } from '../../firebase';
import CoinPie from './CoinPie';
import Header from './Header';
import UserInput from './UserInput';

import TabIcon from '../../components/TabIcon';
import Icons from '../../constants/Icons';

const Main = () => {
  const formatEmail = auth.currentUser?.email.split('@')[0];

  const navigation = useNavigation();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => navigation.goBack())
      .catch((err) => console.log(err));
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior='padding'>
        <SafeAreaView style={styles.coinDataArea}>
          <Header formatEmail={formatEmail} />
          <CoinPie />
          <UserInput />
        </SafeAreaView>

        <TouchableOpacity style={styles.signOutArea} onPress={handleSignOut}>
          <TabIcon icon={Icons.logout} />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 36,
  },

  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#000',
  },

  coinDataArea: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginBottom: 20,
  },

  text: {
    color: '#fff',
    textAlign: 'center',
    marginVertical: 15,
  },
  signOutArea: {
    paddingHorizontal: 15,
    position: 'absolute',
    bottom: 100,
    right: 10,
    borderRadius: 20,
  },
});

export default Main;

// import { useNavigation } from '@react-navigation/native';
// import { auth } from '../../firebase';
// import CoinPie from './CoinPie';
// import Header from './Header';
// import UserInput from './UserInput';

// import TabIcon from '../../components/TabIcon';
// import Icons from '../../constants/Icons';

// const Main = () => {
//   // Username for header
//   const formatEmail = auth.currentUser?.email.split('@')[0];

//   const navigation = useNavigation();

//   const handleSignOut = () => {
//     auth
//       .signOut()
//       .then(() => navigation.goBack())
//       .catch((err) => console.log(err));
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <Header formatEmail={formatEmail} />
//       <ScrollView style={styles.coinDataArea}>
//           <CoinPie />
//           <UserInput />
//       </ScrollView>
//       <TouchableOpacity style={styles.signOutArea} onPress={handleSignOut}>
//         <TabIcon icon={Icons.logout} />
//       </TouchableOpacity>
//     </SafeAreaView>
//   );
// };

// export default Main;

// const styles = StyleSheet.create({
//   container: {
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//     flexDirection: 'column',
//     flex: 1,
//     backgroundColor: '#000',
//   },
//   iconItem: {},

//   coinDataArea: { top: 80 },

//   title: {
//     fontSize: 24,
//     margin: 10,
//   },

//   text: {
//     color: '#fff',
//     textAlign: 'center',
//     marginVertical: 15,
//   },
//   signOutArea: {
//     paddingHorizontal: 15,
//     position: 'absolute',
//     bottom: 100,
//     right: 10,
//     borderRadius: 20,
//   },
// });
