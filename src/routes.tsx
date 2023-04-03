import React from 'react'
import { BrowserRouter, Routes as Router, Route } from 'react-router-dom'

import { Home, Recipes, About, Contact } from './views'
import { Header } from './components'

const Routes: React.FC = () => {
  return (
        <BrowserRouter>
            <Header />
            <Router>
                <Route path="/" element={<Home />} />
                <Route path="/recipes" element={<Recipes />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Router>
        </BrowserRouter>
  )
}

export default Routes
