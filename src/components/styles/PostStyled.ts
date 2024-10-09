import styled from "styled-components";

export const PostStyled = styled.div`
    max-width: 350px;
    min-width: 290px;
    border: 2px solid black;
    border-radius: 40px;
    background-color: #ECEBE9;
    margin: 40px 20px;
    box-shadow: 10px 10px  rgba(0,0,0,0.85);
    
    .user, .title, .description, .footer {
        padding: 20px;
        
    }

    .description {
        padding-top: 0;
        padding-bottom: 0;
    }

    .footer {
        
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;

         button {
            overflow-y: hidden;
            cursor: pointer;
            width: 35px;
            height: 35px;
            background-color: transparent;
            border: none;
            font-size: 30px;
    }
    }
        
    .user {
    
        display: flex;
        align-items: center;
        border-bottom: 1px solid black;

        img {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            margin-right: 10px;
        }
    }

   
`