import styled from 'styled-components'
import { backgroundPolygon } from '../../assets/images'
interface ContainerProps {
  width: string
  height: string
  position: string
}

interface WrapperProps {
  imageWidth: string
}

export const Wrapper = styled.div<WrapperProps>`
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
        width: ${(props) => props.imageWidth};
    }
`

export const Container = styled.div<ContainerProps>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    margin: 20px;


    p {
        text-align: ${(props) => props.position};
        color: ${(props) => props.theme.colors.text};
        font-size: ${(props) => props.theme.fontSizes.medium};
        font-family: ${(props) => props.theme.fonts.text};
        font-weight: 200;
        padding-bottom: 20px;
    }

    h1 {
        text-align: ${(props) => props.position};
        color: ${(props) => props.theme.colors.text};
        font-size: ${(props) => props.theme.fontSizes.medium2};
        font-family: ${(props) => props.theme.fonts.title};
        font-weight: 700;
        padding-bottom: 25px;
    }
`

export const ContainerText = styled.div`
width: 638px;
height: 98px;
`

export const ContainerImage = styled.div`
margin-top: 300px;
display: flex;
align-items: center;
justify-content: space-between;
`
export const BackgroundImage = styled.div`
  position: fixed;
  top: 100px;
  bottom: 0px;
  left: 0px;
  background-image: url(${backgroundPolygon});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  z-index: -1;
`

export const List = styled.div`
    display: flex;
    flex-direction: column;

    div {
        display: flex;
        align-items: center;
    }

    img {
        width: 69px;
        height: 69px;
    }

    h2 {
        color: ${(props) => props.theme.colors.text};
        font-size: ${(props) => props.theme.fontSizes.medium};
        font-family: ${(props) => props.theme.fonts.title};
        font-weight: 700;
        margin-left: 20px;
    }

`
