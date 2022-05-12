import React,{useState} from 'react'
import {RegisterScreen} from '../unauthenticated-app/register'
import {LoginScreen} from '../unauthenticated-app/login'
export const UnauthenticatedApp = ()=>{
    const [isRegistered,setIsRegistered] = useState(false) 
    return (<div>
        {
            isRegistered?<RegisterScreen />:<LoginScreen/>
        }
        <button onClick={()=>setIsRegistered(!isRegistered)}>切换到{isRegistered?'登陆':'注册'}</button>
    </div>)
}