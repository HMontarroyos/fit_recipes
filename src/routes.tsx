import React from 'react'
import { BrowserRouter, Routes as Router, Route } from 'react-router-dom'

import { Home } from './views'
import { Header } from './components'

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Router>{<Route path="/" element={<Home />} />}</Router>
    </BrowserRouter>
  )
}

export default Routes
