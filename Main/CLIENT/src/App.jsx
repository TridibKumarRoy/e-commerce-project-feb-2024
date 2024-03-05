import { useState } from 'react'
import './App.css'
import {Foooter} from './components/Foooter'
import {Navbar} from './components/Navbar'
import {Body} from './pages/Body'

function App() {

  return (
    <>
      <Navbar/>
      <Body/>
      <Foooter/>
    </>
  )
}

export default App;
