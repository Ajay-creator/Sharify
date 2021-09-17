import styled from 'styled-components';

export const Header = styled.div`
    span{
        position: absolute;
        top:15px;
        left: 20px;
        font-size: 25px;
        font-family: 'Pacifico', cursive;
    }
     img{
        position: absolute;
        top:20px;
        right:20px;
        cursor: pointer;
        @media screen and (min-width:576px){
            display: none;
        }
    }
`;
export const MenuDiv = styled.div`
    background: #fff;
    width:100%;
    padding:50px 0 20px 0;
    height:${({open})=>open ? '100%':'0'};
    overflow: hidden;
    @media screen and (min-width:576px){
        position:absolute;
        top:0;
        right:0;
        background: none;
        padding:0;
        height: 100px;
        float: right;
    }
    ul{
        transform: translateX(-20px);
        @media screen and (min-width:576px){
            display: flex;
            justify-content:flex-end;
            flex-direction: row;
            align-items: center;
        }
    }
    ul li{
        list-style: none;
        text-align:center;
        margin:10px 0;
        @media screen and (min-width:576px){
            width:100px;
            margin:0 20px;
        }
    }
    a{
        text-decoration: none;
        color:#000;
        border-radius: 10px;
        padding:5px;
        display: block;
        background: #c2c2c2;
        transition: .5s;
        @media screen and (min-width:576px){
            width:100px;
            background:#3AD9A9;
            border:solid 2px #fff;
        }
        :hover{
            background:#FF725E;
            border: none;
            color:#fff;
        }
    }
    
`;