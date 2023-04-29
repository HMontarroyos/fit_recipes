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
  const [initialRecipes, setInitialRecipes] = useState<Recipe[]>([])
  const [imagesHeader] = useState([banner01, banner02, banner03, banner04])
  const [query, setQuery] = useState<string>()


  useEffect(() => {
    async function fetchRecipes (): Promise<any> {
      try {
        const recipes = await getRecipes()
        setRecipes(recipes)
        setInitialRecipes(recipes)
      } catch (error) {
        console.error(error)
      }
    }
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetchRecipes()
  }, [])

  const handleSearchRecipes = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setQuery(value)

    value.trim().length >= 3
    ? setRecipes(initialRecipes.filter(recipe => recipe.name.toLowerCase().includes(value.toLowerCase())))
    : setRecipes(initialRecipes)
  }

  return (
        <>
            <Fade>
                <S.Title big top={"350px"}>RECEITAS FIT</S.Title>
                <S.ContainerHeader>
                    {imagesHeader.map((image, index) => (
                        <img key={index} src={image} alt={`Imagem ${index}`} />
                    ))}
                </S.ContainerHeader>
            </Fade>
            <S.ContainerInput>
                <S.InputSearch type="text" value={query} onChange={handleSearchRecipes}/>
            </S.ContainerInput>
            {recipes.length > 0 ? (
                <S.Container>
                    {recipes.map((recipe) => (
                        <S.LinkRedirect to={`/recipes/${recipe._id}`}>
                            <CardRecipe key={recipe._id} image={recipe.image} name={recipe.name}/>
                        </S.LinkRedirect>
                    ))}
                </S.Container>
            ): (
                <S.Title top={"50px"}>Nenhuma Receita Encontrada</S.Title>
            )}
        </>
  )
}

export default Home
