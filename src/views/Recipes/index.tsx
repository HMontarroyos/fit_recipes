import React, { useEffect, useState } from 'react'
import * as S from './styled'
import { getRecipes } from '../../server/api'

interface Recipe {
  _id: string
  name: string
  description: string
  ingredients: string[]
  instructions: string
}

const Home: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([])

  useEffect(() => {
    async function fetchRecipes (): Promise<void> {
      try {
        const recipes = await getRecipes()
        setRecipes(recipes)
      } catch (error) {
        console.error(error)
      }
    }
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetchRecipes()
  }, [])

  return (
        <>
            <S.Title>RECEITAS</S.Title>
            <ul>
                {recipes.map((recipe) => (
                    <li key={recipe._id}>
                        <h1>{recipe.name}</h1>
                        <h2>Ingredientes</h2>
                        {recipe.ingredients.map((ingredient) => (
                            <p key={recipe._id}>{ingredient}</p>
                        ))}
                        <i>{recipe.description}</i>
                        <h3>Modo de preparo:</h3>
                        <p>{recipe.instructions}</p>
                    </li>
                ))}
            </ul>
        </>
  )
}

export default Home
