import styled from 'styled-components'
import { backgroundRectangle } from '../../assets/images'

export const Container = styled.div`
display:flex;
flex-direction:column;
justify-content: space-between;
`

export const Title = styled.h2`
text-align: right;
color: ${(props) => props.theme.colors.text};
font-size: ${(props) => props.theme.fontSizes.medium2};
font-family: ${(props) => props.theme.fonts.title};
font-weight: 400;
`

export const Paragraph = styled.p`
    margin:20px;
    text-align: left;
    color: ${(props) => props.theme.colors.text};
    font-size: ${(props) => props.theme.fontSizes.medium};
    font-family: ${(props) => props.theme.fonts.text};
    font-weight: 200;


`

export const ContainerText = styled.div`
width:421px;
height:431;
`

export const ContainerForm = styled.div`

`

export const BackgroundImage = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: url(${backgroundRectangle});
    background-repeat: no-repeat;
    background-size: cover;
    width: 236px;
    height: 100%;
    z-index: -1;
    margin: auto;
`
export const ContainerImage = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: auto;
    right: 0;
    z-index: -1;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: auto;
    margin-right: 0;

    img {
        height: 100%;
        width: 100%;
        opacity: 0.3;
    }
`
