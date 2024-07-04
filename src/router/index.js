import { createHashRouter } from "react-router-dom";
import Login from "../page/login";
import EchartsLayout from "../Layout";
import Polyline from "../page/DataGraph/first";
import Gradient from "../page/DataGraph/sec";
import Dotted from "../page/DataGraph/third/Dotted";
import Aqi from "../page/DataGraph/third/aqi";
import Flights from "../page/DataGraph/third/flights";
import Orthographic from "../page/DataGraph/four/Orthographic";
import Gauge from "../page/DataGraph/four/gauge";
import AuthRoute from "./authRoute";
import PieNet from "../page/DataGraph/four/pieNet";
const router =createHashRouter([{
    path:'/login',
    element: <Login/> 
},
{
    path:'/',
    element: <EchartsLayout/> ,
    children:[{
        path:'/polyline',
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
    }
]
}
]

)
export default router