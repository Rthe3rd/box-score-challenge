import { useState } from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// Components
import TestRequest from './components/TestRequest'
// Views
import Test from './views/Test'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path = "/" element = { <Test/> } />
        <Route exact path = "/test" >
          {/* <Navigate element = {"./static/test.html"} /> */}
        </Route>
      </Routes>
    </div>
  )
}

export default App
