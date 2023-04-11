import { useState } from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './css/style.css'
// Components
import TestRequest from './components/TestRequest'
import Grid from './components/Grid'
// Views
import Test from './views/Test'
import TestOnload from './views/TestOnload'
import Boxscore from './views/Boxscore'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path = "/" element = { <Test/> } />
        <Route path = "/TestOnload" element = { <TestOnload/> } />
        <Route path = "/Grid" element = { <Grid/> } />
        <Route path = "/Boxscore" element = { <Boxscore/> } />
      </Routes>
    </div>
  )
}

export default App
