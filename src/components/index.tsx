import { lazy } from 'react'
import Buttom from './Buttom'
import CardRecipe from './CardRecipe'
import Tag from './Tag'

const Header = lazy(async () => await import('./Header'))
const Loading = lazy(async () => await import('./Loading'))

export { Header, Loading, Buttom, CardRecipe, Tag }
