import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
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
import FAQ from './pages/FAQ'
import About from './pages/About'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Category from './components/Category'
import CommunityGuildlines from './pages/CommunityGuildlines'
import Code from './pages/Code'
import Policy from './pages/Policy'
import Guarantee from './pages/Guarantee'
import BookCard from './components/BookCard'
import CommunityGroup from './pages/CommunityGroup'
import CategoryFilter from './components/CategoryFilter'



const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
function App() {
  const [count, setCount] = useState(0)


  return (
    <AuthProvider> {/* Wrap the app with AuthProvider */}
      <BrowserRouter>
        <MouseTrail />
        <ScrollToTop />
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
          <Route path="/faq" element={<FAQ />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/category" element={<Category />} />
          <Route path="/communityguildlines" element={<CommunityGuildlines />} />
          <Route path="/communitygroup" element={<CommunityGroup />} />
          <Route path="/code" element={<Code/>} />
          <Route path="/policy" element={<Policy/>} />
          <Route path="/guarantee" element={<Guarantee/>} />
          <Route path="/bookcard" element={<BookCard/>} />
          <Route path="/categoryfilter" element={<CategoryFilter/>} />
          
          
        </Routes>
        <Footer />
      </BrowserRouter>
     </AuthProvider>
  )
}

export default App
