import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home'
import Layout from './Components/Home/Layout'
import Posts from './Components/Posts/Posts'

function App() {


  return (
        <div>   
    <Routes>

<Route path='/'  element={<Layout/>} >

<Route path='home' element={<Home/>} />
<Route path='posts' element={<Posts/>} />
 
 </Route>

    </Routes>
         </div>
      
  )
}

export default App
