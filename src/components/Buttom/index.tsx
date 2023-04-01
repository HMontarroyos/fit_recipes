import React from 'react'
import * as S from './styled'

interface ButtomProps {
  width: string
  height: string
  children?: React.ReactNode
}

function Buttom ({ width, height, children }: ButtomProps): JSX.Element {
  return (
        <S.Buttom width={width} height={height}>
            {children}
        </S.Buttom>
  )
}

export default Buttom
