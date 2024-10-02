import './App.css'
import { Route , Routes } from 'react-router-dom'
import Auth from './pages/AuthPage'
import Home from './pages/HomePage.'
function App() {
  

  return (
    <Routes>
      <Route path='/auth' element={<Auth />} />
      <Route path='/' element={<Auth />} />
      <Route path='/home' element={<Home />} />
    </Routes>
  )
}

export default App
