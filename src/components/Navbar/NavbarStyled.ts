import styled from "styled-components";

export const NavbarStyled = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 50px;
    
    .container {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;

        a, div {
            color: white;
            text-decoration: none;
        }

        div {
            display: flex;
            align-items: center;
        }
    }

`