import { useNavigate } from "react-router-dom"
import {useEffect  } from "react"
import { getToken } from "../router/token"
import {message} from 'antd'
const PrivateRoute = ({children}) =>
{
    const navigate=useNavigate()
    const isPast48Hours = (timeStamp) =>
    {
      const currentTime=Math.floor(Date.now() / 1000);
      const timeDifference = currentTime - timeStamp
      const hours48InSeconds = 48 * 60 * 60
      return timeDifference > hours48InSeconds
    }
   useEffect(()=>{
    try{
    const token=getToken()
    const tokenObj=JSON.parse(token)
    console.log(tokenObj);
    
    if(tokenObj===null && isPast48Hours(tokenObj.expired))
    {
        message.warning('登录已过期，请重新登录')
      navigate('/login')
    }else{
        navigate('/')
    }
    }catch(e)
    {
  message.warning('登录已过期，请重新登录')
  navigate('/login')
    }
   },[])
   return <>{children}</>
}
export default PrivateRoute