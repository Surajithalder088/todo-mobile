import { StyleSheet, Text, View } from 'react-native'
import React ,{useState} from 'react'
import { Checkbox } from 'react-native-paper'
import Icon from 'react-native-vector-icons/AntDesign'
import axios from "axios"
import { useNavigation } from '@react-navigation/native'

const Task = ({title, description, status, taskid}) => {
    const navigation=useNavigation()

    const serverurl="https://todo-mobile-server.onrender.com/api/user/v1"

    const [completed,setCompleted]=useState(status)
    const [deleted,setDeleted]=useState(false)

const handleCheckbox=async()=>{

    try{
      
        console.log("updating tasks");
        const {data}= await axios.post(
            `${serverurl}/updatetask/${taskid}`)
        console.log(data.task);

  setCompleted(!completed)
    }catch(err){
        console.log(err);
        alert("failed to update task")
    }
  
}

const deleteHandler=async()=>{
    try{
       
        console.log("deleting tasks");
        const {data}= await axios.delete(
            `${serverurl}/removetask/${taskid}`)
        console.log(data.message);
        alert("task deleted ")
        setDeleted(true)
        navigation.navigate("home")


    }catch(err){
        console.log(err);
        alert("failed to delete task")
    }
  

    
}
  return (
    deleted?<Text> </Text>:

    <>
    <View style={{
        padding:10,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-evenly",
    }}>


     <View style={{width:"70%"}}>
    <Text style={styles.title} >
        {title}
    </Text>
    <Text  style={styles.desc}>
        {description}
    </Text>
   
     </View>
      <Checkbox  status={completed?"checked":"unchecked"}
     color='#474747'
     onPress={handleCheckbox}
      />

   
       
         <Icon 
      name='delete' 
      color="red"
      size={20}
      onPress={deleteHandler}
      />
   
     
    </View></>
  )
}

export default Task

const styles = StyleSheet.create({
    title:{
       fontSize:20,
       marginVertical:7,
       color:"#900"

    },
    desc:{
        color:"#4a4a4a"
    }
})