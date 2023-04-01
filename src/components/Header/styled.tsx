import styled from 'styled-components'
import { Link } from 'react-router-dom'
interface Props {
  height: string
}

export const Menu = styled.div<Props>`
    width: 100%;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    height: ${(props) => props.height};
    background-color: ${(props) => props.theme.colors.primary};
    font-family: ${(props) => props.theme.fonts.heading};
`

export const NavItems = styled.ul`
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
    justify-content: flex-end;

    li {
        color: ${(props) => props.theme.colors.text};
        font-family: ${(props) => props.theme.fonts.title};
        font-weight: bold;
        display: inline-block;
        padding: 10px;
        margin-right: 10px;
        font-size: 30px;

        &:last-child {
            margin-right: 0;
        }
    }
`

export const LinkRedirect = styled(Link)`
    text-decoration: none;
`
