import React from 'react'
import Header from './Components/Header/Header';
import "./App.css"
import Home from './Components/Home/Home';
import Features from './Components/Features/Features';
import Portfolio from './Components/Portfolio/Portfolio';
const App = () => {
  return (
    <>
      {/* <Header/> */}
      <Home/>
      <Features/>
      <Portfolio/>
    </>
  )
}

export default App