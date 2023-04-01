import React from 'react'
import * as S from './styled'
import { Buttom } from '../../components'

const Home: React.FC = () => {
  return (
        <S.Container>
            <div>
                <S.Title>RECEITAS FIT</S.Title>
                <S.Paragraph>
                    Descubra como as receitas fit podem transformar sua vida com
                    saúde e sabor - experimente agora e sinta-se mais motivado,
                    saudável e confiante!
                </S.Paragraph>
            </div>
            <Buttom width={'300px'} height={'50px'}>
                Transforme sua vida agora com um clique
            </Buttom>
        </S.Container>
  )
}

export default Home
