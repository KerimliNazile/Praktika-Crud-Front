import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Main from './Layout/MainLayout/main'
import Home from './Pages/HomePage/home'
import About from './Pages/AboutPage/about'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Main />}>
          <Route path='/home' element={<Home />}></Route>
          <Route path='about' element={<About />}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
