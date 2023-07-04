import React from 'react'
import {route, Routes, BrowserRouter, Route} from 'react-router-dom'
import Home from './PAGES/HomePage/Home'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
     <Route path="/" element={<Home /> } />
     <Route path="/home" element={<Home />} />
     <Route path="*" element={<div>
      <h1> 404 Not Found! </h1>
      </div>}/>
      
    </Routes>
      
      </BrowserRouter>
  )
}

export default App
