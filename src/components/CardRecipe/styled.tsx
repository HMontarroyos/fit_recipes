import styled from 'styled-components'
import { lighten } from 'polished'

export const Card = styled.div`
    width: 200px;
    height: 250px;
    background-color: ${(props) => props.theme.colors.text};
    border-radius: 20px;
    cursor: pointer;
    margin:10px;

    &:hover {
        background-color: ${(props) =>
            lighten(0.1, props.theme.colors.text)};
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    }

    img {
        width: 100%;
        height: 150px;
        border-radius: 20px 20px 0 0;
    }

    h3 {
        padding: 10px;
        color: ${(props) => props.theme.colors.background};
        font-size: ${(props) => props.theme.fontSizes.medium};
        font-family: ${(props) => props.theme.fonts.title};
        font-weight: 400;
    }
`
