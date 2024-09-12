import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import { StartPage } from './components/StartPage'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Navbar from './components/Navbar'

import { faHome, faPhone, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import { icon } from '@fortawesome/fontawesome-svg-core'

function App() {

  return (
    <>
      <Navbar   />
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<StartPage />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/projects' element={<Projects />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
