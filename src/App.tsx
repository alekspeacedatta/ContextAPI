import { ProductProvider } from './contexts/ProductContext'
import { ThemeProvider } from './contexts/ThemeContext'
import Header from './components/Header'
import MainSec from './components/MainSec'
import Footer from './components/Footer'
import SideCartPanel from './components/SideCartPanel'
import './App.css'

function App() {

  return (
    <>
        <ThemeProvider>
      <ProductProvider>
            <div style={{padding: 0}}>
              <Header/>
              <MainSec/>
              <Footer/>
            </div>
            <SideCartPanel/>
      </ProductProvider>
        </ThemeProvider>
    </>
  )
}

export default App
