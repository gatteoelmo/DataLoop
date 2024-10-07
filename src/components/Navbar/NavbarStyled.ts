import styled from "styled-components";

export const NavbarStyled = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 70px;
    
    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;

        a {
            color: black;
            text-decoration: none;
            margin-left: 40px;
        }        

        div {
            display: flex;
            align-items: center;
            color: black;
            text-decoration: none;

            img {
            width: 40px;
            height: 40px;
            margin-left: 10px;
            border-radius: 50%;
            }

            button {
                padding: 10px 20px;
                color: #ECEBE4;
                border-radius: 20px;
                margin-left: 30px;
                margin-right: 40px;
                background-color: #1C1C1C;
                border: none;
                cursor: pointer;
            }
        }
    }

`