import styled from 'styled-components'
import { lighten } from 'polished'

interface Props {
  width: string
  height: string
}

export const Buttom = styled.button<Props>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    color: ${(props) => props.theme.colors.text};
    background-color: ${(props) => props.theme.colors.secondary};
    font-family: ${(props) => props.theme.fonts.heading};
    font-size: 18px;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
        background-color: ${(props) =>
            lighten(0.1, props.theme.colors.secondary)};
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    }
`
