import axios from "axios";
/*
const serverurl="https://todo-mobile-server.onrender.com/api/user/v1"


export const loginstate=(email,password)=>async(dispatch)=>{
    try {
        dispatch({type:"loginRequest"})

        const {data}= await axios.post(
            `${serverurl}/login`,{email,password},
        {
            headers:{
                "Content-Type":"application/json"
            },
        })

        dispatch({type:"loginSuccess",payload:data})
    } catch (error) {
        dispatch({type:"loginFailure",payload:error.response.data.message})
        
    }
}


export const loadUser=()=>async(dispatch)=>{
    try {
        dispatch({type:" loadUserRequest"})

        const {data}= await axios.post(
            `${serverurl}/profile`)

        dispatch({type:"loadUserSuccess",payload:data})
    } catch (error) {
        dispatch({type:" loadUserFailure",payload:error.response.data.message})
        
    }
}
    */