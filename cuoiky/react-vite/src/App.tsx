
import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import { StrictMode } from 'react'
import Home from './components/Home.tsx'
import Header from './components/Header'
import Footer from './components/Footer.tsx'
import Project from './components/Project.tsx'
import Experience from './components/Experience.tsx'
import AboutMe from './components/AboutMe.tsx'
import Contact from './components/Contact.tsx'
import Skill from './components/Skill.tsx'
function App() {


  return (
    <>
      <BrowserRouter>
        <StrictMode>
          <Header/>
            <Routes>
              <Route path='home' element={<Home/>}></Route>
              <Route path='about' element={<AboutMe/>}></Route>
              <Route path='project' element={<Project/>}></Route>
              <Route path='skill' element={<Skill/>}></Route>
              <Route path='contact' element={<Contact/>}></Route>
              <Route path='experience' element={<Experience/>}></Route>
              

            </Routes>
          <Footer/>

        </StrictMode>
      </BrowserRouter>,


    </>
  )
}

export default App
