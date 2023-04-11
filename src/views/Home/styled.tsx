import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const LinkRedirect = styled(Link)`
    text-decoration: none;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;

    div {
        width: 602px;
        margin-bottom: 100px;
    }
`
export const Title = styled.h1`
    text-align: center;
    color: ${(props) => props.theme.colors.text};
    font-size: ${(props) => props.theme.fontSizes.large};
    font-family: ${(props) => props.theme.fonts.title};
    font-weight: 400;
`
export const Paragraph = styled.p`
    text-align: center;
    color: ${(props) => props.theme.colors.text};
    font-size: ${(props) => props.theme.fontSizes.medium};
    font-family: ${(props) => props.theme.fonts.text};
    font-weight: 200;
`
export const ContainerBottomRight = styled.div`
    bottom: 0;
    right: 0;
    position: fixed;

    img {
        width: 351px;
        height: 390px;
    }
`

export const ContainerTopRight = styled.div`
    top: 100px;
    right: 0;
    position: fixed;

    img {
        width: 399px;
        height: 320px;
        z-index:999;
    }
`

export const ContainerBottomLeft = styled.div`
    top: 0px;
    bottom: 0px;
    left: 0px;
    position: fixed;
    z-index:-1;
    img {
        z-index:-1;
        width: 600px;
        height: 679px;
    }
`
