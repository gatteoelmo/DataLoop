import styled from "styled-components";

export const CreateFormStyled = styled.div`
    

    div {
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100vh;
        width: 100vw;
        
    
    
    form {
        color: #1C1C1C;
        padding: 30px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 300px;

        max-width: 350px;
        min-width: 290px;
        border: 2px solid black;
        border-radius: 40px;
        background-color: #ECEBE9;
        margin: 40px 20px;
        box-shadow: 10px 10px  rgba(0,0,0,0.85);

        label {
            color: #1C1C1C;
            font-weight: 400;
            font-size: 30px;
            margin-bottom: 10px;
        }

        input, textarea {
            background-color: transparent;
            border: none;
            border-bottom: 1px solid #1C1C1C;
            font-size: 16px;
            padding: 10px 2px;
            font-family: "Montserrat", sans-serif;
            color: #1C1C1C;
        }

        

        .submitForm {
            background-color: #857D6F80 ;
            padding: 10px 20px;
            border-radius: 10px;
            margin-top: 20px;
            color: #1C1C1C;
            border: none;
            cursor: pointer;
        }
    }
    
    
    
    
`