//CSS
import './App.css'
//React
import { Route, Routes } from 'react-router-dom'
//layouts
import HomeLayout from './layouts/HomeLayout/HomeLayout'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout/>}>
      </Route>
    </Routes>
  )
}

export default App
