import styled from "styled-components";

export const PostStyled = styled.div`
    width: 500px;
    border-radius: 10px;
    
    .title, .description, .footer {
        margin-bottom: 20px;
    }

    button {
        cursor: pointer;
        width: 30px;
        height: 30px;
        background-color: transparent;
        border: none;
        font-size: 20px;
        margin-top: 10px;
    }
`