import styled from 'styled-components'
import { Link } from 'react-router-dom'

interface TitleProps {
  top: string
  big?: boolean
}

export const Title = styled.h1<TitleProps>`
    color: ${(props) => props.theme.colors.text};
    font-size: ${(props) => (props.big ?? false) ? props.theme.fontSizes.big : props.theme.fontSizes.medium};
    font-family: ${(props) => props.theme.fonts.title};
    font-weight: 400;
    position: relative;
    top: ${(props) => props.top};
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: -1;
`
export const ContainerHeader = styled.div`
    margin-top: 50px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
        padding:10px;
        opacity: 30%;
    }

`

export const Container = styled.div`
margin-top: 20px;
display: flex;
flex-wrap: wrap;
`
export const LinkRedirect = styled(Link)`
    text-decoration: none;
`

export const ContainerInput = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size:${(props) => props.theme.fontSizes.medium2}
`
export const InputSearch = styled.input`
    padding: 10px;
    margin:20px;
    width: 600px;
    height: 40px;
    border-radius:50px;
`
