import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Books from './pages/Books'
import Popular from './components/Popular'
import Recommended from './components/Recommended'
import Footer from './components/Footer'
import Header from './components/Header'
import MouseTrail from './components/MouseTrail'
import Test from './pages/Test'
import { AuthProvider } from './components/context/AuthContext'  // Import your AuthContext
import User from './pages/User'

function App() {
  const [count, setCount] = useState(0)

  return (
    <AuthProvider> {/* Wrap the app with AuthProvider */}
      <BrowserRouter>
        <MouseTrail />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/books" element={<Books />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/recommended" element={<Recommended />} />
          <Route path="/test" element={<Test />} />
          <Route path="/user" element={<User />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    // </AuthProvider>
  )
}

export default App
