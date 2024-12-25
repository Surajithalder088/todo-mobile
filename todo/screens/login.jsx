import { View, Text, TextInput,StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Button}  from 'react-native-paper'
import axios from "axios"
import {useDispatch,useSelector} from "react-redux"
import {loginstate}from "../redux/action"

const login = () => {

const serverurl="https://todo-mobile-server.onrender.com/api/user/v1"
 // const {isAuthenticated,loading,error}=useSelector(state=>state.auth)
 // const dispatch=useDispatch();
    const navigation=useNavigation()

    const [email,setEmail]=useState("")
    const [password ,setPassword]=useState("")

    const loginHandler=async ()=>{

      //dispatch(loginstate(email,password))
      try{
        console.log("login start");
 const {data}= await axios.post(
        `${serverurl}/login`,{email,password},
    {
        headers:{
            "Content-Type":"application/json"
        },
    })
    navigation.navigate("home")
    console.log(data);
      }catch(error){
        console.log(error);
        alert("failed to login")
      }
  
    }


  

    
  return (
    <View 
    style={
      {
        flex:1,
        backgroundColor:"#fff",
        alignItems:"center",
        justifyContent:"center"
      }
    }
    >
      <Text style={{fontSize:20,margin:20}}>WELCOME</Text>
      <View style={{width:"70%"}}>
      <TextInput
      style={styles.input}
      placeholder='Email'
      value={email}
      onChangeText={setEmail}
      />
       <TextInput
       secureTextEntry
      style={styles.input}
      placeholder='Password'
      value={password}
      onChangeText={setPassword}
      />

      </View>
    <Button 
    disabled={!email || !password}
    style={styles.btn}
    onPress={loginHandler}
    ><Text style={{color:"#fff"}}>Login</Text>

    </Button>

    <Text style={{marginTop:20}}> Or</Text>
    <TouchableOpacity  onPress={()=>navigation.navigate("register")}>
      <Text
      style={{
        color:"#900",
        height:30,
        margin:20
      }}
      >Sign up</Text>
    </TouchableOpacity>

    </View>
  )
}

export default login

const styles=StyleSheet.create({
  input:{
    backgroundColor:"#fff",
    borderWidth:1,
    borderColor:"#b5b5b5",
    padding:10,
    paddingLeft:15,
    borderRadius:5,
    marginVertical:15,
    fontSize:15
  },
  btn:{
    backgroundColor:"blue",
    width:"70%",
    padding:5

  }
})