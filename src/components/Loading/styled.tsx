import styled, { keyframes } from 'styled-components'

const animationLoading = keyframes`
  0% {
    transform: translateZ(0);
    opacity: 1;
  }
  60% {
    opacity: 0.8;
  }
  100% {
    letter-spacing: 1em;
    transform: translateZ(300px);
    opacity: 0;
  }
`

export const Container = styled.div`
    animation: ${animationLoading} 5s ease-out;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`

export const Title = styled.h1`
    text-align: center;
    color: ${(props) => props.theme.colors.text};
    font-size: ${(props) => props.theme.fontSizes.large};
    font-family: ${(props) => props.theme.fonts.title};
    font-weight: 400;
`
