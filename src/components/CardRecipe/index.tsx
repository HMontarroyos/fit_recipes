import React from 'react'
import * as S from './styled'

interface CardRecipeProps {
  image: string
  name: string
}

function CardRecipe ({ image, name }: CardRecipeProps): JSX.Element {
  return (
    <S.Card>
      <img src={image}/>
      <h3>{name}</h3>
    </S.Card>
  )
}

export default CardRecipe
