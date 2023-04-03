/* eslint-disable */
import React from "react";
import { Fade, Slide } from "react-reveal";
import * as S from "./styled";
import { Buttom } from "../../components";
import plate01 from "../../assets/images/plate_of_food_01.svg";
import plate02 from "../../assets/images/plate_of_food_02.svg";
import plate03 from "../../assets/images/plate_of_food_03.svg";

const Home: React.FC = () => {
    return (
        <>
            <S.Container>
                <div>
                    <S.Title>RECEITAS FIT</S.Title>
                    <S.Paragraph>
                        Descubra como as receitas fit podem transformar sua vida
                        com saúde e sabor - experimente agora e sinta-se mais
                        motivado, saudável e confiante!
                    </S.Paragraph>
                </div>
                <S.LinkRedirect to={"/recipes"}>
                    <Buttom width={"300px"} height={"50px"}>
                        Transforme sua vida agora com um clique
                    </Buttom>
                </S.LinkRedirect>
            </S.Container>
            <S.ContainerTopRight>
                <Fade top>
                    <img src={plate01} />
                </Fade>
            </S.ContainerTopRight>
            <S.ContainerBottomRight>
                <Fade right>
                    <img src={plate02} />
                </Fade>
            </S.ContainerBottomRight>
            {/*             <S.ContainerBottomLeft>


                <Fade left>
                    <img src={plate03} />

               </Fade>
            </S.ContainerBottomLeft> */}
        </>
    );
};

export default Home;
