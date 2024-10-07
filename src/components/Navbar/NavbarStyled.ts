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

            .button-50 {
                appearance: button;
                background-color: #1C1C1C;
                background-image: none;
                border: 1px solid #ECEBE4;
                border-radius: 4px;
                box-shadow: #fff 4px 4px 0 0,#000 4px 4px 0 1px;
                cursor: pointer;
                display: inline-block;
                text-align: center;
                text-transform: none;
                touch-action: manipulation;
                user-select: none;
                -webkit-user-select: none;
                vertical-align: middle;
                white-space: nowrap;
            }
    
            .button-50:focus {
                text-decoration: none;
            }
    
            .button-50:hover {
                text-decoration: none;
            }
    
            .button-50:active {
                box-shadow: rgba(0, 0, 0, .125) 0 3px 5px inset;
                outline: 0;
            }
    
            .button-50:not([disabled]):active {
                box-shadow: #ECEBE4 2px 2px 0 0, #000 2px 2px 0 1px;
                transform: translate(2px, 2px);
            }
    
            @media (min-width: 768px) {
                .button-50 {
                }
            
        }
    }

`