import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Josefin+Sans');


* {
    box-sizing: border-box;
}

body {
    background: ${({ theme }) => theme.colors.body};
    color: hsl: (192, 100%, 9%);
    font-family: 'Josefin Sans', cursive;
    margin: 0
}

p {
    opacity: 0.6;
    line-height: 1.5;
}

img {
    max-width: 100%
}

`;
