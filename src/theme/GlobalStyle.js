import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
}

body{
    margin: 0;
    padding: 0;
    font-family: 'Oswald', sans-serif;
    color: ${({ theme }) => theme.text};
    background: ${({ theme }) => theme.body};
    transition: all 0.5s linear;
    max-width: 52%;
    margin: 0 auto;
    height: 100vh;
    width: 100vw;
    letter-spacing: 0.2px;
    word-spacing: 1px;
    
}

.toggle{
    padding: 5px 10px;
    border-radius: 5px;
    background: ${({ theme }) => theme.toggle};
    cursor: pointer;
    outline: none;
    border: none;
    font-size:1.1rem;

}
.toggle:hover{
  outline: 1px solid #999999;
  transition: all 0.3s linear;
}
.items:hover{
  background: ${({ theme }) => theme.hover}
}
.items.active{
  color:  ${({ theme }) => theme.text};
  font-weight: 500;
}
.paragraph{
  color:  ${({ theme }) => theme.para};
  font-size: 1rem;
  font-weight: 300;
}
`;

export default GlobalStyle;

export const lightTheme = {
  body: "linear-gradient(to right,  #F9FAFB ,#F8FAFA,  #F9FAFB)",
  text: "#000000",
  toggle: "#EAEAEA",
  hover: "#EAEAEA",
  para: "#111",
};

export const darkTheme = {
  body: "#111111",
  text: "#FFFFFF",
  toggle: "#444444",
  hover: "#222222",
  para: "#999",
};
