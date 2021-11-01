import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`


* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    body{
        font-family: Arial, Helvetica, sans-serif;
        background-color: #F3F3F3;
        margin: 0;
        padding: 0;
    }


   button {
       font-size: 14px;
       padding: 10px 0;
       border-radius: 18px;
       border: 2px solid transparent;
       cursor: pointer;
       width: 100%;
    
   }

   .primary-btn{
    border-color: #006cbe;
    background-color: #006cbe;
    color: #fff;
   }

   .outline-btn{
    border-color: #006cbe;
    background-color: #fff;
    color: #006cbe;
    min-width: 120px;

    :hover{
        background-color: #e8eefa
    }


   }




`;
export default GlobalStyle;
