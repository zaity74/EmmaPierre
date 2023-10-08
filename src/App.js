import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar/navbar"
import About from './pages/About/about'
import Home from "./pages/Home/Index"
import Blog from './pages/Blog/blog'
import Boutique from './pages/Boutique/boutique'
import ProductDetails from "./pages/Boutique/ProduitDetails"
import Contact from './pages/Contact/contact'
import Panier from "./components/Card/panier"
import Login from "./pages/Login/login"
import Favoris from "./pages/Favoris/favoris"
import Register from "./pages/Login/register"
import Footer from "./components/Footer/footer"


function App(props){
    return(
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/boutique" element={<Boutique />} />
                    <Route path="/boutique/:slug" element={<ProductDetails />} />
                    <Route path="/Favoris/:slug?" element={<Favoris />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/panier/:slug?" element={<Panier />} />
                    <Route path="/connexion" element={<Login />} />
                    <Route path="/Register" element={<Register />} />
                </Routes>
                <Footer />
            </Router>
        </>
    )
}

export default App