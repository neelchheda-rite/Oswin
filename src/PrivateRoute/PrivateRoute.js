import React from 'react'
import { useSessionStorage } from '../utility/useSessionStorage'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const[jwt,setJwt]=useSessionStorage("","Name");
    
  return jwt ? children : <Navigate to="/login" /> 
}

export default PrivateRoute
