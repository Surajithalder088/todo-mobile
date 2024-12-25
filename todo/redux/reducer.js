 /*import { createReducer } from "@reduxjs/toolkit";
/// problem on create reducer
 export const authReducer =createReducer({},{
    loginRequest:(state)=>{
        state.loading=true
    },
    loginSuccess:(state,action)=>{
        state.loading=false
        state.isAuthenticated=true
        state.user=action.payload.user
        state.message=action.payload.message
    },
    loginFailure:(state,action)=>{
        state.loading=false
        state.isAuthenticated=false
        state.error=action.payload.error
    },
    loadUserRequest:(state)=>{
        state.loading=true
    },
    loadUserSuccess:(state,action)=>{
        state.loading=false
        state.isAuthenticated=true
        state.user=action.payload.user
        
    },
    loadUserFailure:(state,action)=>{
        state.loading=false
        state.isAuthenticated=false
        state.error=action.payload.error
        
    },
    clearError:(state,action)=>{
        state.error=null
    }
 })
    */