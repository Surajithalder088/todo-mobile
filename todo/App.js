import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Main from "./Main.jsx"

import { Provider } from 'react-redux';
import store from './redux/store.js';




export default function App() {
  return ( 
   <Main/>
 
  );
}

const styles = StyleSheet.create({
  container: {
   height:"800",
   flex:1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
