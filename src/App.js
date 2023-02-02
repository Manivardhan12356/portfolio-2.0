import React from 'react'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import './App.css'
import Experience from './components/experience/Experience'
import { Routes,Route } from 'react-router-dom'
import Home from './components/home/Home'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'


const App = () => {
  return (
    <div className='App'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='experience' element={<Experience/>}/>
        <Route path='projects' element={<Projects/>}/>
        <Route path='contact' element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default App
