import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 0;
    margin: 0;
    width: 100%;
    position: relative;
    background: #000;
`;

export const Content = styled.div`
    max-width:1280px;
    height: 100%;
    margin:0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    color:#3AD9A9;
    padding: 20px;
`;

export const Text = styled.div`
    position: relative;
    h1{
        font-size:40px;
        letter-spacing: 1.3px;
        @media screen and (min-width:720px){
            font-size:100px ;
        }
    }
`;