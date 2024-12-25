
import React, { useEffect ,useState} from 'react'
import {NavigationContainer}from "@react-navigation/native"
import {createNativeStackNavigator} from"@react-navigation/native-stack"
import home from './screens/home'
import login from './screens/login'
import Footer from './components/Footer'
import profile from './screens/profile'
import register from './screens/register'
import Text from "react-native-paper"
import { useDispatch, useSelector } from 'react-redux'
import { loadUser } from './redux/action'
const Stack = createNativeStackNavigator()


export default function Main  () {

 const [loading,setLoading]=useState(false);
  //const {isAuthenticated,loading}=useSelector(state=>state.auth)
  return (
    
  <NavigationContainer>
    <Stack.Navigator  initialRouteName={"login"}>
        <Stack.Screen name="home" component={home}  options={{headerShown:false}}/>
        <Stack.Screen name="login" component={login}  options={{headerShown:false}}/>
        <Stack.Screen name="register" component={register}  options={{headerShown:false}}/>
        <Stack.Screen name="profile" component={profile}   options={{headerShown:false}}/>
    </Stack.Navigator>
   
  </NavigationContainer>
  )
}

