import { StyleSheet, Text, View ,TextInput,TouchableOpacity} from 'react-native'
import React ,{useState}from 'react'
import { Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import axios from "axios"


const register = () => {

const serverurl="https://todo-mobile-server.onrender.com/api/user/v1"

     const navigation=useNavigation()
     const [name,setName]=useState("")
        const [email,setEmail]=useState("")
        const [password ,setPassword]=useState("")
    
        const registerHandler=async()=>{
         

          try{
            console.log("register start");
     const {data}= await axios.post(
            `${serverurl}/register`,{name,email,password},
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
      placeholder='Name'
      value={name}
      onChangeText={setName}
      />
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
    disabled={!email || !password ||!name}
    style={styles.btn}
    onPress={registerHandler}
    ><Text style={{color:"#fff"}}>Register</Text>

    </Button>

    <Text style={{marginTop:20}}> Or</Text>
    <TouchableOpacity  onPress={()=>navigation.navigate("login")}>
      <Text
      style={{
        color:"#900",
        height:30,
        margin:20
      }}
      >Sign in</Text>
    </TouchableOpacity>

    </View>
  )
}

export default register

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