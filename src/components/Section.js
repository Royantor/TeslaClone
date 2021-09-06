import React from 'react'
import styled from "styled-components"
import Fade from 'react-reveal/Fade';


const Section = ({title,description,LeftBtnText,RightBtnText,backgroundImg}) => {
    return (
        <Wrap bgImage={backgroundImg}>
          <Fade bottom>
          
            <ItemText>
                <h1>{title}</h1>
                <p>{description}</p>
            </ItemText> 
            </Fade>
            <Buttons>
             <Fade bottom>
            <ButtonGroup>
                <LeftButton>
                   {LeftBtnText}
                </LeftButton>
                {
                    RightBtnText &&
                    <RightButton>
                       {RightBtnText}
                    </RightButton>

                }
                
            </ButtonGroup>
            </Fade>
            <DownArrow src="/images/down-arrow.svg"/>
             </Buttons> 
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
 z-index:10; 
 width: 100vw;
 height:100vh;
 background-size:cover;
 display: flex;
 flex-direction: column;
 justify-content: space-between;
 align-items: center;
 background-position: center;
 background-repeat: no-repeat;
 background-image: url('/images/model-s.jpg');
 background-image:${props=>`url("/images/${props.bgImage}")`}
`
const ItemText= styled.div`
 padding-top: 15vh;
 text-align: center;
 margin-bottom: 30px;
`

const ButtonGroup =styled.div`
 display: flex;
 margin-bottom:30px;
 @media (max-width:768px){
     flex-direction:column;
 }
`


const LeftButton = styled.div`
 background-color: grey;
 height: 48px;
 width: 256px;
 color: white;
 display: flex;
 justify-content: center;
 align-items: center;
 border-radius: 100px;
 opacity: 0.85;
 text-transform: uppercase;
 font-size: 12px;
 cursor: pointer;
 margin:8px;

`
const Buttons = styled.div``

const RightButton= styled(LeftButton)`
 background:white;
 opacity:0.65;
 color:black;
`

const DownArrow= styled.img`
 height:40px;
 overflow-x:hidden;
 animation: animateDown infinite 1.5s;

`