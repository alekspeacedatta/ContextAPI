import { ProductProvider } from './contexts/ProductContext'
import { ThemeProvider } from './contexts/ThemeContext'
import Header from './components/Header'
import MainSec from './components/MainSec'
import Footer from './components/Footer'
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
