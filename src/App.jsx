import { useState } from 'react'
import Navbar from './components/Navbar'
import PersonalBg from './components/PersonalBg'
import Education from './components/Education'
import Experience from './components/Experience'
import FinishButton from './components/FinishButton'
import './App.css'


function App() {


  return (
    <div className='final-render'>
      <Navbar/>
      <PersonalBg />
      <Education/>     
      <Experience/>
      <FinishButton/>
    </div>
  )
}

export default App
