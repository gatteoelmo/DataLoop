import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        overflow-x: hidden;
        // overflow-y: hidden;
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        -webkit-touch-callout: none;
        user-select: none;
        color: #1C1C1C;
    }

    body {
        font-family: "Montserrat", sans-serif;
        background : #ECEBE4;
        font-size: 16px;
    }

    h1 {
        font-weight: 400;

`