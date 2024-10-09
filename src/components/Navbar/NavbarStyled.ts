import styled from "styled-components";

export const NavbarStyled = styled.div`
    *{
    transition: all 0.4s;
}

.container{
    margin: 1vh 2vw;
}

/* Navbar section */

.nav{
    overflow: hidden;
    width: 100%;
    position: fixed;
    line-height: 65px;
    text-align: center;
    background: transparent;
    backdrop-filter: blur(10px);

}


.nav div.logo{
    width: 250px;
    position: absolute;
}

.nav div.main_list{
    float: right;
}

.nav div.main_list ul{
    width:100%;
    height: 65px;
    display: flex;
    list-style: none;
}

.nav div.main_list ul li{
overflow: hidden;
    margin-left: 20px;
    padding: auto
}

.user {
    margin-left: 30px;
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;

    p:hover {
        color: #c0c0c0;
    }
    

    img {
        margin-left: 10px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }


}

.signout {
    display: flex;
    align-items: center;
    justify-content: center;


    button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        width: 100px;
        height: 40px;
        font-family: "Montserrat", sans-serif;
        font-size: 16px;
    }

    button:hover {
        color: #c0c0c0;
    }
}

.nav div.main_list ul li a{
    text-decoration: none;
}

.nav div.main_list ul li a:hover{
    color: #c0c0c0;
}

.media_button {
    overflow-y: hidden;
}

#mediaButton {
    overflow-y: hidden;
}

.nav div.media_button {
    width: 40px;
    height: 40px;
    background-color: transparent;
    position: absolute;
    right: 15px;
    top: 12px;
    display: none;
}

.nav div.media_button button.main_media_button {
    width: 100%;
    height: 100%;
    background-color: transparent;;
    outline: 0;
    border: none;
    cursor: pointer;
}

.nav div.media_button button.main_media_button span{
    width: 98%;
    height: 1px;
    display: block;
    background-color: black;
    margin-top: 9px;
    margin-bottom: 10px;
}

.nav div.media_button button.main_media_button:hover span:nth-of-type(1){
    transform: rotateY(180deg);
    transition: all 0.5s;
    background-color: black;
}

.nav div.media_button button.main_media_button:hover span:nth-of-type(2){
    transform: rotateY(180deg);
    transition: all 0.4s;
    background-color: black;
}

.nav div.media_button button.main_media_button:hover span:nth-of-type(3){
    transform: rotateY(180deg);
    transition: all 0.3s;
    background-color: black;
}

.nav div.media_button button.active span:nth-of-type(1) {
    transform: rotate3d(0, 0, 1, 45deg);
    position: absolute;
    margin: 0;
}

.nav div.media_button button.active span:nth-of-type(2) {
    display: none;
}

.nav div.media_button button.active span:nth-of-type(3) {
    transform: rotate3d(0, 0, 1, -45deg);
    position: absolute;
    margin: 0;
}

.nav div.media_button button.active:hover span:nth-of-type(1) {
    transform: rotate3d(0, 0, 1, 20deg);
}

.nav div.media_button button.active:hover span:nth-of-type(3) {
    transform: rotate3d(0, 0, 1, -20deg);
}


/* Media qurey section */

@media screen and (min-width: 768px) and (max-width: 1024px) {
    
    .container{
        margin: 1vh 1vw;
        overflow: hidden;
    }
    
}




@media screen and (max-width:768px) {
    
    .container{
        margin: 1vh 1vw;
    }
    
    
    .nav div.logo{
    }
        
    
    .nav div.main_list{
        width: 100%;
        margin-top: 65px;
        height: 0px;
        overflow: hidden;
    }
    
    .nav div.show_list{
        height: 170px;
    }
    
    .nav div.main_list ul{
        flex-direction: column;
        width: 100%;
        height: 200px;
        top: 80px;
        right: 0;
        left: 0;
    }

    .user img {
        display: none;
    }
    
    .nav div.main_list ul li{
        width: 100%;
        height: 40px;
        background-color: transparent;
         backdrop-filter: blur(10px);
        margin-left: 0px;
    }
    
    .nav div.main_list ul li a{
      text-align: center;
        line-height: 40px;
        width: 100%;
        height: 40px;
        display: table;
    }
    
    .nav div.media_button{
        display: block;
    }
}









    




















// position: fixed;
    // display: flex;
    // justify-content: center;
    // width: 100vw;
    // // height: 70px;
    
    
    // .container {
    //     margin-top: 20px;
    //     display: flex;
    //     justify-content: space-between;
    //     align-items: center;
    //     width: 100%;

    //     a {
    //         color: black;
    //         text-decoration: none;
    //         margin-left: 40px;
    //     }        
        
    //     .logo {
    //         width: 250px;
            
    //     }

    //     .user {
    //         width: 300px;
    //     }

    //     div {
    //         display: flex;
    //         align-items: center;
    //         color: black;
    //         text-decoration: none;

    //         img {
    //         width: 40px;
    //         height: 40px;
    //         margin-left: 10px;
    //         border-radius: 50%;
    //         }


    //         button {
    //             padding: 10px 20px;
    //             color: #ECEBE4;
    //             border-radius: 20px;
    //             margin-left: 30px;
    //             margin-right: 40px;
    //             background-color: #1C1C1C;
    //             border: none;
    //             cursor: pointer;
    //         }

    //         .button-50 {
    //             appearance: button;
    //             background-color: #1C1C1C;
    //             background-image: none;
    //             border: 1px solid #ECEBE4;
    //             border-radius: 4px;
    //             box-shadow: #fff 4px 4px 0 0,#000 4px 4px 0 1px;
    //             cursor: pointer;
    //             display: inline-block;
    //             text-align: center;
    //             text-transform: none;
    //             touch-action: manipulation;
    //             user-select: none;
    //             -webkit-user-select: none;
    //             vertical-align: middle;
    //             white-space: nowrap;
    //         }
    
    //         .button-50:focus {
    //             text-decoration: none;
    //         }
    
    //         .button-50:hover {
    //             text-decoration: none;
    //         }
    
    //         .button-50:active {
    //             box-shadow: rgba(0, 0, 0, .125) 0 3px 5px inset;
    //             outline: 0;
    //         }
    
    //         .button-50:not([disabled]):active {
    //             box-shadow: #ECEBE4 2px 2px 0 0, #000 2px 2px 0 1px;
    //             transform: translate(2px, 2px);
    //         }
    
    //         @media (min-width: 768px) {
    //             .button-50 {
    //             }
            
    //     }
    // }

    // @media (min-width: 768px) {

    //     height: none;
    //     .container {
    //         margin-top: 20px;
    //         display: flex;
    //         justify-content: space-between;
    //         align-items: center;
    //         width: 100%;
    //         flex-wrap: wrap;
    //     }
    // }

`