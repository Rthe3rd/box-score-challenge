import {Routes, Route} from 'react-router-dom'
import './App.css'
import './css/style.css'
// Components
// Views
import NBAGamePage from './views/NBAGamePage'
import MLBGamePage from './views/MLBGamePage'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path = "/MLBGamePage" element = { <MLBGamePage/> } />
        <Route path = "/NBAGamePage" element = { <NBAGamePage/> } />
      </Routes>
    </div>
  )
}

export default App
