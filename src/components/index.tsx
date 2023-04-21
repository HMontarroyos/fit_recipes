import { lazy } from 'react'
import Buttom from './Buttom'
import CardRecipe from './CardRecipe'

const Header = lazy(async () => await import('./Header'))

export { Header, Buttom, CardRecipe }
