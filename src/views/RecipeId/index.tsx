/* eslint-disable */
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { getRecipeId } from '../../server/index'
import * as S from './styled'


interface Recipe {
  _id: string
  name: string
  description: string
  ingredients: string[]
  instructions: string
  image: string
}

const RecipeId: React.FC = () => {
  const [recipe, setRecipe] = useState<Recipe>()
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    async function fetchRecipe (): Promise<any> {
          try {
            if(id){
                const recipe = await getRecipeId(id)
                setRecipe(recipe)
            }else{
                throw new Error(`id recipe invalid`)
            }
        } catch (error) {
            console.error(error)
        }
    }
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetchRecipe()
  }, [])



  return (
        <>
        <S.Title>{recipe?.name}</S.Title>
        </>
  )
}

export default RecipeId
