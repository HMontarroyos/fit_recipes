/* eslint-disable @typescript-eslint/comma-dangle */
import React, { useState } from 'react'
import { Fade, Zoom } from 'react-reveal'
import * as S from './styled'
import { plate04, plate05, plate06 } from '../../assets/images'
import { LIST_BENEFITS } from '../../global/const'

const About: React.FC = () => {
  const [listItens] = useState(LIST_BENEFITS)

  return (
        <>
            <S.Wrapper imageWidth={'300px'}>
                <Fade left>
                    <img src={plate04} />
                </Fade>
                <Fade right>
                    <S.Container width="592px" height="230px" position={'left'}>
                        <h1>Sobre Nós</h1>
                        <p>
                            Somos uma comunidade apaixonada por alimentação
                            saudável e equilibrada. Acreditamos que compartilhar
                            receitas é uma forma poderosa de inspirar e ajudar
                            uns aos outros a adotar um estilo de vida saudável.
                            Nossa missão é criar um espaço onde os entusiastas
                            de receitas fits possam se conectar, compartilhar
                            suas criações culinárias e aprender uns com os
                            outros.
                        </p>
                    </S.Container>
                </Fade>
            </S.Wrapper>

            <S.Wrapper imageWidth={'500px'}>
                <Fade right>
                    <S.Container width="738px" height="162px" position={'left'}>
                        <h1>Nossos Valores</h1>
                        <p>
                            Valorizamos a importância de uma alimentação
                            nutritiva e saborosa para promover o bem-estar.
                            Todas as receitas cadastradas em nossa plataforma
                            são cuidadosamente avaliadas para garantir que sejam
                            alinhadas com nossa visão de alimentação saudável,
                            com ingredientes frescos e naturais.
                        </p>
                        <p>
                            Acreditamos na força da comunidade e na troca de
                            conhecimentos. Nossa plataforma é um espaço onde os
                            membros podem compartilhar suas receitas, dar
                            feedbacks, tirar dúvidas e se apoiar mutuamente na
                            jornada de uma alimentação mais saudável. Estamos
                            comprometidos em promover um ambiente colaborativo e
                            inclusivo para todos os membros.
                        </p>
                        <p>
                            Valorizamos a diversidade nas preferências
                            culinárias e incentivamos a personalização das
                            receitas. Nossa plataforma permite que os membros
                            cadastrem suas próprias receitas fits, com
                            ingredientes de sua escolha, e compartilhem sua
                            criatividade na cozinha. Queremos inspirar a
                            experimentação e a descoberta de novos sabores e
                            combinações.
                        </p>
                    </S.Container>
                </Fade>
                <Fade left>
                    <img src={plate05} />
                </Fade>
            </S.Wrapper>

            <S.ContainerImage>
                <Fade left>
                    <img src={plate06} width={'700px'} />
                </Fade>
                <S.List>
                    {listItens.map((item, idx) => (
                        <div key={idx}>
                            <Zoom bottom>
                                <img src={item.icon} />
                            </Zoom>
                            <Zoom top>
                                <S.ContainerText>
                                    <h2>{item.title}</h2>
                                </S.ContainerText>
                            </Zoom>
                        </div>
                    ))}
                </S.List>
                <S.BackgroundImage />
            </S.ContainerImage>
        </>
  )
}

export default About
