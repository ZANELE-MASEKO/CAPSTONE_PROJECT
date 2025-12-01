import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div class='bg-blue-500 max-w-1800px max-h-800px mx-auto flex justify-center align-center'>
      first layer
      <div class='bg-red-500 w-1750px max-h-750px mx-auto flex justify-center align-center'>
        second layer
        <div>
            third layer
            <div>
              fourth layer
              <div>
                last layer
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default App
