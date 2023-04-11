import React from 'react'
import { Fade } from 'react-reveal'
import * as S from './styled'
import { Buttom } from '../../components'
import { plate01, plate02 } from '../../assets/images'

const Home: React.FC = () => {
  return (
        <>
            <S.Container>
                <div>
                    <S.Title>RECEITAS FIT</S.Title>
                    <S.Paragraph>
                        Descubra como as receitas fit podem transformar sua vida
                        com saúde e sabor - experimente agora e sinta-se mais
                        motivado, saudável e confiante!
                    </S.Paragraph>
                </div>
                <S.LinkRedirect to={'/recipes'}>
                    <Buttom width={'300px'} height={'50px'}>
                        Transforme sua vida agora com um clique
                    </Buttom>
                </S.LinkRedirect>
            </S.Container>
            <S.ContainerTopRight>
                <Fade top>
                    <img src={plate01} />
                </Fade>
            </S.ContainerTopRight>
            <S.ContainerBottomRight>
                <Fade right>
                    <img src={plate02} />
                </Fade>
            </S.ContainerBottomRight>
        </>
  )
}

export default Home
