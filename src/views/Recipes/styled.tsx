import styled from 'styled-components'

export const Title = styled.h1`
    color: ${(props) => props.theme.colors.text};
    font-size: ${(props) => props.theme.fontSizes.big};
    font-family: ${(props) => props.theme.fonts.title};
    font-weight: 400;
    position: absolute;
    top: 0;
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
