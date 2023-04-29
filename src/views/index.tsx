import { lazy } from 'react'

const Home = lazy(async () => await import('./Home'))
const Recipes = lazy(async () => await import('./Recipes'))
const RecipeId = lazy(async () => await import('./RecipeId'))
const About = lazy(async () => await import('./About'))
const Contact = lazy(async () => await import('./Contact'))
const NotFound = lazy(async () => await import('./NotFound'))

export { Home, Recipes, RecipeId, About, Contact, NotFound }
