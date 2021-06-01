import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
  }
`;
export const MainContainer = styled.div`
  min-height: 100vh;
  height: auto;
  background-image: url(${({ url }) => url});
`;

export const ButtonSurprise = styled.button`
  background-color: #00fa9a;
  border: 1px solid #00fa9a;
  border-radius: 2px;
  font-size: 16px;
  color: #fff;
  text-align: center;
  padding: 20px;
  text-shadow: 0px 1px 0px #00fa9a;
  width: 30vw;
`;

export const ImgWrapper = styled.img`
  position: absolute;
  z-index: -1;
`;
