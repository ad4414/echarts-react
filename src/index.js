import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './router';
 
import {Provider} from "react-redux"
import LoginReducer from './store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
      <Provider store={LoginReducer}>

         <RouterProvider router={router}>
           </RouterProvider>
      </Provider>
 
   
 
);

 
