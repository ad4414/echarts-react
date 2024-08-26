import { configureStore } from "@reduxjs/toolkit";
import reducer from "./light";
const LoginReducer=configureStore({
    reducer:{
        login:reducer,
       
    }
})

export default LoginReducer