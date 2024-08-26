import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios'
import { setToken as _setToken,getToken,removeToken } from '../../router/token'
import { loginAPI } from '../../router/user'
 
 
const LoginStore=createSlice({
name:'login',
initialState:{
    token:getToken() || '',
    LoginData:[],
     
},
reducers:{
    setToken (state, action) {
        state.token = action.payload
        _setToken(action.payload)
      },
    setLogin(state,action){
        state.LoginData=action.payload
    },
 
    clearUserInfo (state) {
        state.token = ''
        state.LoginData = []
        removeToken()
      }
}
})
const {setLogin,setToken,setFlightGL}=LoginStore.actions
const reducer=LoginStore.reducer
const fetchToken=(loginForm)=>{
    return async (dispatch)=>{
        const res=await loginAPI(loginForm)
        console.log(res);
        dispatch(setToken(res.data.token))
    }
}
const fData=()=>{
    return async (dispatch) => {
        const res=await axios.get('http://localhost:3004/user1')
        dispatch(setLogin(res.data))
        
    }
} 
 

export {fData,fetchToken }
export default reducer