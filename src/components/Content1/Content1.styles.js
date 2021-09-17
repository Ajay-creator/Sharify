import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
    min-height:600px;
    position:relative;
    overflow: hidden;
    background: #FF725E;
`;
export const Content = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    background: #000;
    transform:rotateZ(-5deg) translateY(-120px) scale(1.2);
`;

export const Text = styled.div`
    z-index: 10;
    position: absolute;
    padding:20px 20px; 
    font-size:2rem ;
    color:#c2c2c2;
    p{
        font-size: 1.3rem;
    }
    @media screen and (min-width:576px){
        top: 40%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 60%;
        font-size: 50px;
        text-align: center;
        p{
            font-size:1.5rem;
            text-align: left;
            position: relative;
        }
        p::before{
            content: '';
            position: absolute;
            height: 30px;
            width: 30px;
            background: #FF725E;
            border-radius: 50%;
            left:-40px;
        }
    }
`;