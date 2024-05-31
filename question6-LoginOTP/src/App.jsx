import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from './components/Login'
import { Verify } from './components/Verify'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/verify" element={<Verify />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
