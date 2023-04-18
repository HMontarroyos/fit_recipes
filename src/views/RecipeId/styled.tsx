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
