import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Main from './Layout/MainLayout/main'
import Home from './Pages/HomePage/home'
import About from './Pages/AboutPage/about'
import Wishlist from './Components/Wishlist/wishlist'
import Detail from './Pages/DetailPage/detail'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Main />}>
          <Route path='/home' element={<Home />}></Route>
          <Route path='about' element={<About />}></Route>
          <Route path='wishlist' element={<Wishlist />}></Route>
          <Route path='detail/:id' element={<Detail />}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
