import React from 'react'
import styled from 'styled-components'
import Section from "./Section"
const Home = () => {
    return (
        <Container>
            <Section
               title="model s"
               description="order online for touchderlivery"
               backgroundImg="model-s.jpg"
               LeftBtnText="custom order"
               RightBtnText="existing inventory"
            />
            <Section
               title="model 3"
               description="order online for touchderlivery"
               backgroundImg="model-3.jpg"
               LeftBtnText="custom order"
               RightBtnText="existing inventory"
            />
            <Section
               title="model x"
               description="order online for touchderlivery"
               backgroundImg="model-x.jpg"
               LeftBtnText="custom order"
               RightBtnText="existing inventory"
            />
            <Section
               title="model y"
               description="order online for touchderlivery"
               backgroundImg="model-y.jpg"
               LeftBtnText="custom order"
               RightBtnText="existing inventory"
            />
            <Section
               title="Lowest Cost Solar Panels in America"
               description="order online for touchderlivery"
               backgroundImg="solar-panel.jpg"
               LeftBtnText="custom order"
               RightBtnText="existing inventory"
            />
            <Section
               title="Produce Clean Energy From Your Roof"
               description="order online for touchderlivery"
               backgroundImg="solar-roof.jpg"
               LeftBtnText="custom order"
               RightBtnText="existing inventory"
            />
             <Section
               title="Accessories"
               description="order online for touchderlivery"
               backgroundImg="accessories.jpg"
               LeftBtnText="shopNow"
              
            />
        </Container>
    )
}

export default Home;

const Container = styled.div`
 height: 100vh;
 z-index:10;

`