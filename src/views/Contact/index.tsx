import React from 'react'
import * as S from './styled'
import { Flip } from 'react-reveal'
import { plate07 } from '../../assets/images'

const Contact: React.FC = () => {
  return (
    <>
        <S.Container>
            <S.ContainerText>
            <Flip top>
                <S.Paragraph>
                    Bem-vindo(a) à nossa página de Fale Conosco! Estamos aqui
                    para ajudar e ficaremos super felizes em receber sua
                    mensagem.
                </S.Paragraph>
                <S.Paragraph>
                    Nossa equipe está pronta para responder às suas dúvidas,
                    sugestões, elogios ou até mesmo para ouvir suas histórias
                    incríveis.
                </S.Paragraph>
                <S.Paragraph>
                    Além disso nossas redes sociais são perfeitas para
                    interagir, tirar dúvidas, compartilhar experiências e enviar
                    sugestões. Siga-nos para fazer parte da nossa comunidade
                    animada e não perder momentos divertidos!
                </S.Paragraph>
                </Flip>
            </S.ContainerText>
            <S.ContainerForm>
            <S.Title>CONTATE-NOS</S.Title>
            </S.ContainerForm>
        </S.Container>
            <S.ContainerImage>
                <img src={plate07} />
            </S.ContainerImage>
            <S.BackgroundImage />
            </>
  )
}

export default Contact
