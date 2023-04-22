import React, { Suspense } from 'react'
import { BrowserRouter, Routes as Router, Route } from 'react-router-dom'

import { Header, Loading } from './components'
import { Home, Recipes, RecipeId, About, Contact } from './views'

const Routes: React.FC = () => {
  return (
        <BrowserRouter>
            <Suspense fallback={<Loading/>}>
                <Header />
                <Router>
                    <Route path="/" element={<Home />} />
                    <Route path="/recipes" element={<Recipes />} />
                    <Route path="/recipes/:id" element={<RecipeId />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Router>
            </Suspense>
        </BrowserRouter>
  )
}

export default Routes
