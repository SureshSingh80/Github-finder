import React from 'react'
import { useState } from 'react'
import Navbar from './Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import More from './More'

const GitHubFinder = () => {

    const [data,setData]=useState();

  return (
    <div>
        
        <BrowserRouter>
            <Navbar></Navbar>
            <Routes>
                <Route path="/" element={<Home data={data} setData={setData}></Home>}></Route>
                <Route path="/about" element={<About></About>}></Route>
                <Route path="/More" element={<More data={data}></More>}></Route>
                <Route path="/back" element={<Home data={data} setData={setData}></Home>}></Route>  
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default GitHubFinder