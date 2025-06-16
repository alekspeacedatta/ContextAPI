import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ThemeToggle from './ThemeToggle'
import { ProductProvider } from './ProductContext'
import { ThemeProvider } from './ThemeContext'
import Header from './Header'
import MainSec from './MainSec'
import Footer from './Footer'
import ProductItems from './ProductItems'
import Cart from './Cart'
import './App.css'

function App() {

  return (
    <>
      <ProductProvider>
        <ThemeProvider>
          <Header/>
          <MainSec/>
          <Footer/>
        </ThemeProvider>
      </ProductProvider>
    </>
  )
}

export default App
