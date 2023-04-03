import React from 'react'
import * as S from './styled'

function Header (): JSX.Element {
  return (
        <S.Menu height="68px">
            <S.NavItems>
                <S.LinkRedirect to={'/'} data-item={'Inicio'}>
                    <li>Inicio</li>
                </S.LinkRedirect>
                <S.LinkRedirect to={'/about'} data-item={'Sobre'}>
                    <li>Sobre</li>
                </S.LinkRedirect>
                <S.LinkRedirect to={'/contact'} data-item={'Contato'}>
                    <li>Contato</li>
                </S.LinkRedirect>
                <S.LinkRedirect to={'/recipes'} data-item={'Receitas'}>
                    <li>Receitas</li>
                </S.LinkRedirect>
            </S.NavItems>
        </S.Menu>
  )
}

export default Header
