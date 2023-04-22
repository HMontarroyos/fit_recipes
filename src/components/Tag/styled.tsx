import styled from 'styled-components'
import { lighten } from 'polished'

export const Container = styled.div`
    background-color: ${(props) => props.theme.colors.background2};
    border-radius: 10px;
    width: 130px;
    cursor: pointer;

    &:hover {
        background-color: ${(props) =>
            lighten(0.1, props.theme.colors.background2)};
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    }
`

export const Text = styled.p`
    text-align: center;
    padding: 5px;
    color: ${(props) => props.theme.colors.background};
    font-size: ${(props) => props.theme.fontSizes.medium};
    font-family: ${(props) => props.theme.fonts.title};
    font-weight: 700;
`
