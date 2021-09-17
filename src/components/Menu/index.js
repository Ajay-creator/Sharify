import React from 'react'
import { useState } from 'react';
//styles
import { MenuDiv,Header } from './Menu.styles'

//icon
import hamburger from '../../images/hamburger_icon.svg'

const Menu = () => {
    const [Open,setOpen] = useState(false);

    return (
    <>
    <Header>
        <span>Sharify</span>
        <img onClick={()=>{setOpen(!Open)}}  src={hamburger} alt="hamburger"/>
    </Header>
    <MenuDiv open={Open}>
            <ul>
                
                <li><a href="https://google.com">Home</a></li>
                <li><a href="https://google.com">Cat</a></li>
                <li><a href="https://google.com">Login</a></li>
                <li><a href="https://google.com">Signup</a></li>
            </ul>
       
    </MenuDiv>
    </>
    )
};

export default Menu