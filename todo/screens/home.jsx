import { View, Text ,StyleSheet,TouchableOpacity,TextInput,ScrollView, SafeAreaView} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import Task from '../components/Task'
import  Icon  from 'react-native-vector-icons/Entypo'
import {Dialog,Button} from"react-native-paper"
import Footer from '../components/Footer'
import axios from "axios"

const home = () => {

  const serverurl="https://todo-mobile-server.onrender.com/api/user/v1"

 const [dialog,setDialog]=useState(false)
 const[title ,setTitle]=useState("")
 const [description,  setDescription]=useState("")
const [tasks,setTasks]=useState([])
    const navigation=useNavigation()
const [fetching,setFetching]=useState(false)

useEffect(()=>{
  

  const rendertasks=async()=>{
    try{
      console.log("task rendering start");
      setFetching(true)
      const {data}= await axios.get(
        `${serverurl}/profile`,
    {
        headers:{
            "Content-Type":"application/json"
        },
    })
    
    setTasks(data.user.tasks)
    setFetching(true)
  }catch(err){
    console.log(err);
    alert("failed to login")
    navigation.navigate("login")
  }
  }
  rendertasks()

},[fetching])


    const tashjg=[{title:"1st task",description:"1st task",status:false,taskId:"6ffju658ggb65878"},
      {title:"2nd task",description:"2nd task",status:true,taskId:"6ffju658g98908065878"},
      {title:"3rd task",description:"3rd task",status:false,taskId:"6ffju65l,mhki65878"}
    ]

    const dialogHandler=()=>{
      setDialog(true)
}
const dialogHide=()=>{
  setDialog(false)
  
}


const addTaskhandler=()=>{
 
  try{
    console.log("adding task");
   const {data}= axios.post(
      `${serverurl}/addtask`,{title,description},
  {
      headers:{
          "Content-Type":"application/json"
      },
  })
  console.log("task added",data);
  setFetching(false)

  }catch(err){
    console.log(err);
    alert("failed to add task")
  }
 
  setDialog(false)
  
}

  return (
    <>
  

    <View  style={{flex:1,backgroundColor:"#fff",paddingTop:StatusBar.currentHeight}} >
      <ScrollView>
<SafeAreaView>


      <Text style={styles.heading} >All Tasks :</Text>
      <TouchableOpacity style={styles.addBtn} onPress={dialogHandler}>
      <Icon name="add-to-list" size={20}  color="#999" />

     </TouchableOpacity>
     {  tasks.length===0?<Text>  no tasks </Text>:
    
        tasks.map((i)=>( <Task  key={i._id}
           title={i.title}
          description={i.description}
          status={i.complete}
          taskid={i._id}
        />))
      }
     
     
     </SafeAreaView></ScrollView>
     
    </View>

    <Dialog  visible={dialog}>
      <Dialog.Title>Add a Task</Dialog.Title>
      <Dialog.Content>
        <TextInput
        style={styles.input}
        placeholder="title"
        value={title}
        onChangeText={setTitle}
        />

        <TextInput
        style={styles.input}
        placeholder="description"
        value={description}
        onChangeText={setDescription}
        />
        <View style={{flexDirection:"row",alignItems:"center"}}>
          <TouchableOpacity onPress={dialogHide}>
            <Text>
              CANCEL
            </Text>
          </TouchableOpacity>
          <Button 
          onPress={addTaskhandler}
          color='#900'>
            ADD
          </Button>
        </View>
      </Dialog.Content>
    </Dialog>
    <Footer/>
    </>
  )
}

export default home


const styles=StyleSheet.create({
  heading:{
    fontSize:28,
    textAlign:"center",
    marginTop:25,
    marginBottom:20,
    color:"#fff",
    backgroundColor:"#474747"
  },
  addBtn:{
    backgroundColor:"#fff",
    width:150,
    height:50,
    justifyContent:"center",
    borderRadius:100,
    alignSelf:"center",
    marginVertical:20,
    elevation:15
  },
  input:{
    backgroundColor:"#fff",
    borderWidth:1,
    borderColor:"#b5b5b5",
    padding:10,
    paddingLeft:15,
    borderRadius:5,
    marginVertical:15,
    fontSize:15
  }
})