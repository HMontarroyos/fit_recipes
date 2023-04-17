/* eslint-disable @typescript-eslint/indent */
import React, { useState } from 'react'
import { Flip } from 'react-reveal'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as S from './styled'
import { saveEmailData } from '../../server/index'
import { plate07 } from '../../assets/images'
import { Buttom } from '../../components'

const Contact: React.FC = () => {
  const [initialValues] = useState({
    name: '',
    email: '',
    // eslint-disable-next-line @typescript-eslint/comma-dangle
    message: '',
  })

  const handleSubmit = async (values: any): Promise<void> => {
    console.log(values)
// eslint-disable-next-line @typescript-eslint/indent
  try {
      toast.success('Formulario enviado com sucesso, breve retornaremos.', {
        // eslint-disable-next-line @typescript-eslint/comma-dangle
        position: toast.POSITION.TOP_CENTER,
      })
      return await saveEmailData(values)
 } catch (error) {
      console.error(error)
    }
  }

  const validate = (values: any): Record<string, string> => {
    const errors: Record<string, string> = {}
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (!values.name) {
      console.log('ENTROU AQUI')
      errors.name = 'Nome é obrigatório'
      console.log(errors.name)
    }
    return errors
  }

  return (
        <>
            <S.Container>
                <S.ContainerText>
                    <Flip top>
                        <S.Paragraph>
                            Bem-vindo(a) à nossa página de Fale Conosco! Estamos
                            aqui para ajudar e ficaremos super felizes em
                            receber sua mensagem.
                        </S.Paragraph>
                        <S.Paragraph>
                            Nossa equipe está pronta para responder às suas
                            dúvidas, sugestões, elogios ou até mesmo para ouvir
                            suas histórias incríveis.
                        </S.Paragraph>
                        <S.Paragraph>
                            Além disso nossas redes sociais são perfeitas para
                            interagir, tirar dúvidas, compartilhar experiências
                            e enviar sugestões. Siga-nos para fazer parte da
                            nossa comunidade animada e não perder momentos
                            divertidos!
                        </S.Paragraph>
                    </Flip>
                </S.ContainerText>
                <S.ContainerForm>
                    <S.Title>CONTATE-NOS</S.Title>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={handleSubmit}
                        validate={validate}
                    >
                        <Form>
                            <S.Input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Digite seu nome"
                                required
                            />
                            {/* <ErrorMessage name="name" component="div" /> */}
                            <br />
                            <S.Input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Digite seu e-mail"
                                required
                            />
                            <br />
                            <S.TextArea
                                placeholder="Qual o motivo do seu contato ?"
                                as="textarea"
                                id="message"
                                name="message"
                                required
                            />
                            <div style={{ margin: '10px' }}>

                                <Buttom
                                    type="submit"
                                    // disabled={!Object.values(initialValues).every(value => Boolean(value))}
                                    width="235px"
                                    height="50px"
                                >
                                    Enviar
                                </Buttom>

                            </div>
                        </Form>
                    </Formik>
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
