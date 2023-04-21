import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes as Router, Route } from 'react-router-dom'

/* import { Header } from './components' */
/* import { Home, Recipes, RecipeId, About, Contact } from './views' */

const Header = lazy(async () => await import('./components/Header'))

const Home = lazy(async () => await import('./views/Home'))
const Recipes = lazy(async () => await import('./views/Recipes'))
const RecipeId = lazy(async () => await import('./views/RecipeId'))
const About = lazy(async () => await import('./views/About'))
const Contact = lazy(async () => await import('./views/Contact'))

const Routes: React.FC = () => {
  return (
        <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
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
