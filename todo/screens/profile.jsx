import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React,{useEffect,useState} from 'react'
import { StatusBar } from 'expo-status-bar'
import Footer from '../components/Footer'
import { useNavigation } from '@react-navigation/native'
import axios from "axios"

const profile = () => {

  
  const serverurl="https://todo-mobile-server.onrender.com/api/user/v1"

  const navigation=useNavigation()
 const [user,setUser]=useState({})
 const [fetching,setFetching]=useState(false)
  useEffect(()=>{

    const renderuser=async()=>{
      try{
        
        const {data}= await axios.get(
          `${serverurl}/profile`,
      {
          headers:{
              "Content-Type":"application/json"
          },
      })
      console.log(data.user);
     setUser(data.user)
     setFetching(true)
      
    }catch(err){
      console.log(err);
      alert("failed to login")
      navigation.navigate("login")
    }
    }
    renderuser()
  
  },[fetching])
  return (<>
    <View style={{flex:1,paddingTop:StatusBar.currentHeight,backgroundColor:"#900",justifyContent:"center",alignItems:"center"}}>

      <Text style={styles.heading}>profile</Text>
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.line}> your profile</Text>
      <Text style={styles.line}>profile</Text>
      <TouchableOpacity onPress={()=>navigation.navigate("login")}>
        <Text style={styles.link}>login</Text>
        </TouchableOpacity>
    </View>
    <Footer/>
    </>
  )
}

export default profile

const styles = StyleSheet.create({
  heading:{
    fontSize:30,
    color:"#fff",
    fontWeight:"bold"
  },
  name:{
    fontSize:20,
    color:"#fff",
    fontWeight:"bold"
  },
  line:{
    fontSize:16,
    color:"#fff",
    fontWeight:"bold"
  },
  link:{
    marginTop:60,
    fontSize:10,
    color:"#fff",
    fontStyle:"italic"
  }
})