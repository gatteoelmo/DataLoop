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
        color: #ECEBE4;
        background-color: #1C1C1C;
        padding: 30px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 300px;

        label {
            color: #ECEBE4;
            font-weight: 400;
            font-size: 20px;
        }

        input, textarea {
            background-color: #1C1C1C;
            border: none;
            border-bottom: 1px solid #ECEBE4;
            font-size: 16px;
            padding: 10px 2px;
            font-family: "Montserrat", sans-serif;
            color: #ECEBE4;
        }

        

        .submit {
            background-color: #ECEBE4;
            padding: 10px 20px;
            border-radius: 10px;
            margin-top: 20px;
            color: #1C1C1C;
        }
    }
    
    
    
    
`