import React, {useState} from 'react'
import styled from "styled-components"
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineCloseCircle } from 'react-icons/ai';


const Header = () => {
    const [burgerStatus, setBurgerStatus]= useState(false);
    return (
        <Container>
            <a>
               <img src="/images/logo.svg" alt=""/>
            </a>
            {/* <Menu>
               <a href="#">Model s</a>
               <a href="#">Model 3</a>
               <a href="#">Model X</a>
               <a href="#">Model Y</a>
            </Menu> */}
            <RightMenu>
               <a href="#">Shop</a>
               <a href="#">Account</a>
               <BiMenuAltRight onClick={()=>setBurgerStatus(true)}/>
            </RightMenu>
            <Burgernav show={burgerStatus}>
            <CloseWrapper>
             <AiOutlineCloseCircle  onClick={()=>setBurgerStatus(false)}/>
            </CloseWrapper>
             
               <li><a href="#">Model s</a></li>
               <li><a href="#">Model s</a></li>
               <li><a href="#">Model s</a></li>
               <li><a href="#">Model s</a></li>
               <li><a href="#">Model s</a></li>
               <li><a href="#">Model s</a></li>
               <li><a href="#">Model s</a></li>
            </Burgernav>
        </Container>
    )
}

export default Header


const Container  = styled.div`
 z-index:1;
 min-height:60px;
 position:fixed;
 display:flex;
 align-items:center;
 justify-content:space-between;
 padding: 0 20px;
 top:0;
 left:0;
 right:0;
`
const Menu = styled.div`
 display:flex;
 align-items:center;
 justify-content:center;
 flex:1;

 a{
     font-weight:600;
     text-transform:uppercase;
     padding:0 10px;
     flex-wrap:nowrap;
 }
 @media(max-width:768px){
     display:none;
 }

`

const RightMenu =styled.div`
  display:flex;
  align-items:center;
  a{
     font-weight:600;
     text-transform:uppercase;
     margin-right:10px;
 }
`

const Burgernav=styled.div`
 position:fixed;
 top:0;
 right:0;
 bottom:0;
 background:white;
 width:300px;
 z-index:16;
 list-style:none;
 padding:20px;
 display:flex;
 flex-direction:column;
 text-align:start;
 transform:${props => props.show ? 'translateX(0)':'translateX(100%)'};
 transition: transform 0.2s  ease-in;

 li{
     padding:15px 0;
     border-bottom:1px solid rgba(0,0,0, .2);
     a{
         font-weight:600;
     }
 } 
`


const CloseWrapper = styled.div`
 display:flex;
 justify-content:flex-end;
`