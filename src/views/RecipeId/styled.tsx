import styled from 'styled-components'

export const Container = styled.div`
    padding: 20px;
    margin: 20px;
`
export const Label = styled.h3`
    color: ${(props) => props.theme.colors.text};
    font-size: ${(props) => props.theme.fontSizes.medium2};
    font-family: ${(props) => props.theme.fonts.title};
    font-weight: 700;
    text-align: left;
    margin-bottom: 30px;
    margin-top: 30px;

`

export const Title = styled.h1`
    color: ${(props) => props.theme.colors.text};
    font-size: ${(props) => props.theme.fontSizes.large};
    font-family: ${(props) => props.theme.fonts.title};
    font-weight: 400;
    text-align: left;
    margin-bottom: 20px;
`
export const ContainerTag = styled.div`
    display: flex;
    flex-direction: row;

    div{
        margin: 5px;
    }
`
export const Text = styled.p`
    text-align: left;
    color: ${(props) => props.theme.colors.text};
    font-size: ${(props) => props.theme.fontSizes.medium};
    font-family: ${(props) => props.theme.fonts.text};
    font-weight: 400;
    margin-top: 20px;
`

export const ContainerImage = styled.div`
    width: 100%;
    height: 661px;
    background-color: ${(props) => props.theme.colors.background2};
    margin-top: 30px;
    border-radius:20px;

    img {
        width: 100%;
        height: 558px;
        border-radius:20px 20px 0 0 ;
    }
`
export const ContainerRecipeInformation = styled.div`
    padding-top: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    div{
        display: flex;
        flex-direction: row;
        align-items: center;
    }
`

export const TextAndIcon = styled.div`
    padding-right: 20px;
    img {
        width: 37px;
        height: 37px;
        padding-right: 10px;
    }

    p {
        margin-right: 10px;
        font-size: ${(props) => props.theme.fontSizes.medium};
        font-family: ${(props) => props.theme.fonts.title};
        font-weight: 700;
    }

`

export const Summary = styled.p`
    text-align: center;
    color: ${(props) => props.theme.colors.text};
    font-size: ${(props) => props.theme.fontSizes.medium};
    font-family: ${(props) => props.theme.fonts.text};
    font-weight: 400;
    margin-top: 20px;
    font-style: italic;
    margin: 35px;
`
export const ContainerInstructionsRecipe = styled.div`

    div {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
`

export const Number = styled.p`
    color: ${(props) => props.theme.colors.text};
    font-size: ${(props) => props.theme.fontSizes.big};
    font-family: ${(props) => props.theme.fonts.title};
    font-weight: 700;
    text-align: left;
    margin-right: 20px;
`
export const ContainerUtensils = styled.div`
    width: 384px;
    height: 237px;
    background-color: ${(props) => props.theme.colors.secondary};
    border-radius:20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`
export const ContainerIngredients = styled.div`
  display: flex;
  flex-direction: column;

  div {
    margin-bottom: 10px;
  }

  label {
    color: ${(props) => props.theme.colors.text};
    font-size: ${(props) => props.theme.fontSizes.medium};
    font-family: ${(props) => props.theme.fonts.text};
    font-weight: 400;
  }

  input {
    cursor: pointer;
    width: 24px;
    height: 24px;
    border-radius: 10px;
    margin-right: 20px;
  }

  input:checked + label {
    color: ${(props) => props.theme.colors.disabledText};
    opacity: 0.50;
    text-decoration: line-through;
  }
`
