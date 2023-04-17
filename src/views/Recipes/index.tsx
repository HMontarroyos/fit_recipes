/* eslint-disable */
import React, { useEffect, useState } from 'react'
import { Fade } from 'react-reveal'
import * as S from './styled'
import { CardRecipe } from '../../components'
import { getRecipes } from '../../server/index'
import { banner01, banner02, banner03, banner04 } from '../../assets/images'

interface Recipe {
  _id: string
  name: string
  description: string
  ingredients: string[]
  instructions: string
  image: string
}

const Home: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([])
  const [imagesHeader] = useState([banner01, banner02, banner03, banner04])

  useEffect(() => {
    async function fetchRecipes (): Promise<any> {
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
            <Fade>
                {/* <S.Title>RECEITAS FIT</S.Title> */}
                <S.ContainerHeader>
                    {imagesHeader.map((image, index) => (
                        <img key={index} src={image} alt={`Imagem ${index}`} />
                    ))}
                </S.ContainerHeader>
            </Fade>
            <S.Container>
                {recipes.map((recipe) => (
                    <CardRecipe key={recipe._id} image={recipe.image} name={recipe.name}/>
                ))}
            </S.Container>





{/*             <ul>
                {recipes.map((recipe) => (
                    <li key={recipe._id}>
                        <h1>{recipe.name}</h1>
                        <img src={recipe.image} alt={recipe.name} width={'400px'} height={'400px'}/>
                        <h2>Ingredientes</h2>
                        {recipe.ingredients.map((ingredient) => (
                            <p key={recipe._id}>{ingredient}</p>
                        ))}
                        <i>{recipe.description}</i>
                        <h3>Modo de preparo:</h3>
                        <p>{recipe.instructions}</p>
                    </li>
                ))}
            </ul> */}
        </>
  )
}

export default Home
