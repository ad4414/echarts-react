import {createSlice} from '@reduxjs/toolkit'
 
import { setToken as _setToken,getToken,removeToken } from '../../router/token'
 
import { request } from '../../router/request'
 
 
const LoginStore=createSlice({
name:'login',
initialState:{
    token:getToken() || '',  
},
reducers:{
    setToken (state, action) {
        state.token = action.payload
        _setToken(action.payload)
      },
    clearUserInfo (state) {
        state.token = ''
        state.userInfo = {}
        removeToken()
      }
}
})
const {setToken}=LoginStore.actions
const reducer=LoginStore.reducer
 
const fData=(loginData)=>{
    return async (dispatch) => {
        const res=await request.post('/authorizations',loginData)
        console.log(res);
        dispatch(setToken(res.data.token))
    }
} 
 

export {fData }
export default reducer