import styled from 'styled-components'

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
