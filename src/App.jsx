import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Pages/Home'
import Category from './Pages/Category'
import Cart from './Pages/Cart'
import Product from './Pages/Product'
import Login from './Pages/Login'
import Footer from './Components/Footer'
import ScrollToTop from './Components/ScrollToTop'

// {import images}
import bannerwomens from './assets/bannerwomens.png'
import bannermens from './assets/bannermens.png'
import Blog from './Pages/Blog'



const App = () => {
  return (
    <Router>
       <ScrollToTop />
      <main className="bg-amber-100 text-black">
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/men" element={<Category  category="men" banner={ bannermens}/>} />
          <Route path="/women" element={<Category category="women" banner={ bannerwomens} />} />
          <Route path="/accessories" element={<Category/>} />
          <Route path="/blog" element={<Blog/>}/> 
          <Route path="/" element={<Product/>}> 
          <Route path="product/:productId" element={<Product/>} />
          </Route>
          <Route path="/cart-page" element={<Cart/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
        <Footer />
      </main>
    </Router>
  )
}

export default App
