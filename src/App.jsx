import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import MainBody from './components/MainBody'
import Card from './components/Card'
import Products from './components/Products'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <NavBar />
      <MainBody />
      <Card />
      <Products />
      <Footer />
    </>
  )
}

export default App
