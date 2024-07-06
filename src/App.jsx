import React from 'react'
import Navbar from './Components/NavBar/Navbar'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import Lounge from './Components/Lounge/Lounge'
import Search from './Components/Search/Search'
import Subscribe from './Components/Subscribers/Subscribe'
import Travelers from './Components/Travelers/Travelers'
import Support from './Components/Support/Support'
import Info from './Components/Info/Info'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home />
      <Search />
      <Support />
      <Info />
      <Lounge />
      <Travelers />
      <Subscribe />
      <Footer/> 
    </div>
  )
}

export default App