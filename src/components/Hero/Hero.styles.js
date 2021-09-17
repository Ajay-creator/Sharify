import styled from 'styled-components';

export const Wrapper = styled.div`
    min-height: 650px;
    width: 100%;
    background:#3AD9A9;
    margin:0 auto;
`;
export const Content = styled.div`
    margin:0 auto;
    width: 100%;
    max-width: 1280px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content:space-between;
    flex-direction: row;
    flex-wrap: wrap;
    padding:10px 20px;
`;
export const Text = styled.div`
    h1{
        font-size:100px;
        @media screen and (min-width:720px){
            font-size:140px;
        }
    }
    h2{
        font-size:50px;
        transform: translateY(-70px);
        @media screen and (min-width:720px){
            transform: translateY(-100px);
        }
    }
`;
export const Image = styled.img`
    min-width: 250px;
    margin:0 auto;
    max-width: 500px;
    @media screen and (min-width:720px){
        margin-top:100px;
    }
`;

export const Button=styled.a`
    margin-top:-100px ;
    top: 20px;
    height:50px;
    width:200px;
    background:#FF725E;
    text-decoration: none;
    color: #000;
    border-radius: 10px;
    font-size: 1.5rem;
    display: flex;
    justify-content:center;
    align-items: center;
`;