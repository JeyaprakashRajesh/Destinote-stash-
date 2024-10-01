import './App.css'
import { Route , Routes } from 'react-router-dom'
import Auth from './pages/AuthPage'
function App() {
  

  return (
    <Routes>
      <Route path='/auth' element={<Auth />} />
      <Route path='/' element={<Auth />} />
    </Routes>
  )
}

export default App
