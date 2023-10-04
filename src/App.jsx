import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Piano from './components/Piano'
import PianoMappingEntries from './components/PianoMappingEntries'

function App() {

  return (
    <>
        <Piano/>
        <PianoMappingEntries/>
    </>
  )
}

export default App
