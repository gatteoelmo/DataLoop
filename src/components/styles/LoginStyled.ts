import styled from "styled-components";

export const LoginPageStyled = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    
    button {
    
        div {
            display: flex;
            align-items: center;
            gap: 10px;
            color: #ECEBE4;
            font-weight: 200;

            img {
                height: 20px;
            }
        }
    }

    
    .button-50 {
      appearance: button;
      background-color: #000;
      background-image: none;
      border: 1px solid #000;
      border-radius: 4px;
      box-shadow: #fff 4px 4px 0 0,#000 4px 4px 0 1px;
      box-sizing: border-box;
      cursor: pointer;
      display: inline-block;
      margin: 0 5px 10px 0;
      overflow: visible;
      padding: 12px 30px;
      text-align: center;
      text-transform: none;
      touch-action: manipulation;
      user-select: none;
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
      box-shadow: #fff 2px 2px 0 0, #000 2px 2px 0 1px;
      transform: translate(2px, 2px);
    }
    
`



