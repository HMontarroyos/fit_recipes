import React from 'react'
import * as S from './styled'

interface TagProps {
  text: string
}

function Tag ({ text }: TagProps): JSX.Element {
  return (
    <S.Container>
        <S.Text>{text}</S.Text>
    </S.Container>
  )
}

export default Tag
