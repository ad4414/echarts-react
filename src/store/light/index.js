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
        try {
            // 可能会抛出错误的代码
            const res= await request.post('/authorizations',loginData)
            console.log(res);
            dispatch(setToken(res.data.token))
        } catch (error) {
            console.error("Error caught: ", error);
            // 处理错误，不显示在页面上
        }
    }
} 
 

export {fData }
export default reducer