import { createBrowserRouter } from "react-router-dom";
 
import Login from "../page/login";
import EchartsLayout from "../Layout";
import Polyline from "../page/DataGraph/first";
import Gradient from "../page/DataGraph/sec";
import Dotted from "../page/DataGraph/third/Dotted";
import Aqi from "../page/DataGraph/third/aqi";
import Flights from "../page/DataGraph/third/flights";
import Orthographic from "../page/DataGraph/four/Orthographic";
import Gauge from "../page/DataGraph/four/gauge";
import PieNet from "../page/DataGraph/four/pieNet";
import FlightGL from "../page/DataGraph/four/flightGL";
import { useSelector } from "react-redux";
import axios from "axios";
const router =createBrowserRouter([{
    path:'/login',
    element: <Login/> 
},
{
    path:'/',
    element: <EchartsLayout/> ,
    children:[{
        index:true,
        element:<Polyline/>
    },{
        path:'/gradient',
        element:<Gradient/>
    },{
    path:'/dotted',
    element:<Dotted/>
    },{
     path:"/aqi",
     element:<Aqi/>
    },{
        path:'/flight',
        element:<Flights/>
    },{
        path:'/orthographic',
        element:<Orthographic/>
    },{
        path:"/gauge",
        element:<Gauge/>
    },{
        path:'/pieNet',
        element:<PieNet/>
    },{
        path:'/flightGL',
        element:<FlightGL/>,
        loader:async ()=>{
             return axios.get('/data-gl/asset/data/flights.json')
        }
    }
]
}
]

)
export default router