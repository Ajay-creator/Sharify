import styled from 'styled-components'

export const Wrapper = styled.div`
    margin:0;
    width:100%;
    background:#FF725E;
    padding:5px 0;
`;

export const Heading = styled.div`
    width:50%;
    height: 60px;
    margin:0 auto ;
    h3{
        position: relative;
        text-align: center;
        font-size:30px ;
        font-weight: bolder;
        padding: 5px;
        transform: translateY(-20px);
    }
    h3::after{
        position: absolute;
        content: '';
        height: 5px;
        width: 0;
        background: #fff;
        top:100%;
        left: 50%;
        transform: translate(-50%,-50%);
        border-radius: 5px;
        transition: .5s;
    }
    h3:hover::after{
        width:100%;
    }
`;

export const Content = styled.div`
    max-width: 1280px;
    padding: 0 20px 30px 20px;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin:0 auto;
    transform-style: preserve-3d;
    perspective: 1000px;
`;

export const Box = styled.div`
    position: relative;
    min-width: 250px;
    width: 350px;
    min-height: 200px;
    max-width:400px;
    border-radius: 10px;
    margin:10px;
    background: #000;
    color:#3AD9A9;
    display: flex;
    align-items:center ;
    justify-content: center;
    box-shadow:2px 5px 5px rgba(0,0,0,0.5),-5px -2px 10px rgba(0,0,0,0.3);
    z-index:100;
    transition: 1s;
    h4{
        color:#3AD9A9;
    }
    :hover{
        transform: rotateX(180deg);
        visibility: hidden;
        .back{
            visibility: visible;    
        }
    }
    .back{
        position: absolute;
        top:0;
        left:0;
        height: 100%;
        width:100%;
        padding:10px 20px;
        border-radius:10px;
        background: #000;
        box-shadow:2px 5px 5px rgba(0,0,0,0.5),-5px -2px 10px rgba(0,0,0,0.3);
        color: #fff;
        visibility: hidden;
        transform:rotateX(180deg);
        transition-delay: .3s;
    }
`;