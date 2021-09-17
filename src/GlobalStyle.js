import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    
    *{
        box-sizing: border-box;
        font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
    body{
        margin: 0;
        padding:0;
        font-size:20px;
        font-family: 'Poppins', sans-serif;
    }
    h1,h2{
        font-family: 'Anton', sans-serif;
    }
`;