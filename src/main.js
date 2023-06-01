import React from 'react'
import App from './App'
import {Route,Routes} from "react-router-dom"
import Login from './Components/Login/Login'


const Main = () => {
  return (
    <>
       <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='home' element={<App/>}/>
       </Routes>
    </>
  )
}

export default Main