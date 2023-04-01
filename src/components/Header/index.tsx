import React from 'react'
import * as S from './styled'

function Header (): JSX.Element {
  return (
        <S.Menu height="68px">
            <S.NavItems>
                <S.LinkRedirect to={'/'} data-item={'Inicio'}>
                    <li>Inicio</li>
                </S.LinkRedirect>
                <li>Sobre</li>
                <li>Contato</li>
                <li>Receitas</li>
            </S.NavItems>
        </S.Menu>
  )
}

export default Header
