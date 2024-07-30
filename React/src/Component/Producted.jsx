import React from 'react'
import { Navigate } from 'react-router-dom'

export default function Producted({isSignedIn,children}) {

    if(!isSignedIn){
        return <Navigate to={'/'}/>
    }
    return children;


}
