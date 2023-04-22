/* eslint-disable */
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { getRecipeId } from '../../server/index'
import { Tag } from "../../components"
import { icon06, icon07, icon08} from "../../assets/images/icons"
import * as S from './styled'


interface Recipe {
    name: string;
    description?: string;
    summary: string;
    ingredients: {
      checked: boolean;
      amount?: string;
      name: string;
      measurement?: string;
    }[];
    instructions: {
      step: string;
      description: string;
    }[];
    image: string;
    createdAt?: Date;
    updatedAt?: Date;
    rating?: number;
    timer: string;
    portion: string;
    difficulty: string;
    type: string;
    occasions: string;
    specialOccasions?: string[];
    utensils?: string[];
    foodRestriction?: string[];
}

const RecipeId: React.FC = () => {
  const [recipe, setRecipe] = useState<Recipe>()
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    async function fetchRecipe (): Promise<any> {
          try {
            if(id){
                const recipe = await getRecipeId(id)
                console.log("RECIPE", recipe)
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

  const handleIngredientChange = (e: React.ChangeEvent<HTMLInputElement>, ingredientId: number) => {
    if (recipe) {
        const updatedIngredients = [...recipe.ingredients]
        updatedIngredients[ingredientId].checked = e.target.checked;
        setRecipe(prevRecipe => ({...prevRecipe, ingredients: updatedIngredients}) as Recipe);
    } else {
        return
    }
  }



  return (
        <S.Container>
        <S.Title>{recipe?.name}</S.Title>
        {recipe?.foodRestriction && (
            <S.ContainerTag>
                {recipe.foodRestriction.map((foodRestriction, idx) => (
                    <div key={idx}>
                        <Tag text={foodRestriction}/>
                    </div>
                ))}
            </S.ContainerTag>
        )}
        {recipe?.description && (
            <S.Text>{recipe?.description}</S.Text>
        )}
        <S.ContainerImage>
            <img src={recipe?.image} alt={recipe?.name}/>
            <S.ContainerRecipeInformation>
                <div>

                </div>
                <div>
                    <S.TextAndIcon>
                        <img src={icon06}/>
                        <p>{recipe?.portion}</p>
                    </S.TextAndIcon>
                    <S.TextAndIcon>
                        <img src={icon07}/>
                        <p>{recipe?.timer}</p>
                    </S.TextAndIcon>
                    <S.TextAndIcon>
                        <img src={icon08}/>
                        <p>{recipe?.difficulty}</p>
                    </S.TextAndIcon>
                </div>
            </S.ContainerRecipeInformation>
        </S.ContainerImage>
        <S.Summary>{recipe?.summary}</S.Summary>
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
            <div>
                    <S.Label>Ingredientes</S.Label>
                    <S.ContainerIngredients>
                        {recipe?.ingredients.map((ingredient, idx)=> (
                            <div key={idx}>
                                <input
                                    type="checkbox"
                                    checked={!!ingredient.checked}
                                    onChange={(e) => handleIngredientChange(e, idx)}
                                />
                                <label>{`${ingredient.amount} ${ingredient.measurement} ${ingredient.name}`}</label>
                            </div>
                        ))}
                    </S.ContainerIngredients>
            </div>
            {recipe?.utensils && recipe.utensils?.length > 0 && (
                <S.ContainerUtensils>
                    <S.Label>Utensílios</S.Label>
                        {recipe.utensils.map((utensil, idx)=> (
                            <S.Text key={idx}>{utensil}</S.Text>
                        ))}
                </S.ContainerUtensils>
            )}
            </div>
        <S.Label>Modo de preparo</S.Label>
        <S.ContainerInstructionsRecipe>
            {recipe?.instructions.map((instruction, idx) => (
            <div key={idx}>
                <S.Number>{instruction.step}</S.Number>
                <S.Text>{instruction.description}</S.Text>
            </div>
            ))}
        </S.ContainerInstructionsRecipe>
        </S.Container>
  )
}

export default RecipeId
