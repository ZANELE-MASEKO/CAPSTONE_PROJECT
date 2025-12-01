import { useState } from 'react'
import './App.css'
import React from 'react'
import { LandingPage } from './components/LandingPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div class=' bg-white-500 flex justify-center text-center align-cneter'>
      <LandingPage/>
    </div>
  )
}

export default App
