
import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function App() {
 

  return (
    <>
       {/* we using app component as layout */}
       <Header />
       <Outlet />
       <Footer />
    </>
  )
}

export default App
