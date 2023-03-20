import React from 'react'
import styled from 'styled-components'
import Section from './Section'
import { Link, animateScroll as scroll } from "react-scroll";
import ScrollToTop from "react-scroll-to-top";

function Home() {
  return (
    <Container>
        <Section
          title = "Model X"
          description = "Order Online for Touchless Delivery"
          backgroundImg = "model-x.jpg"
          leftBtnText="Custom order"
          rightBtnText= "Existing inventory"
          id = "Model-X"
        />
        <Section
          title = "Model Y"
          description = "Order Online for Touchless Delivery"
          backgroundImg = "model-y.jpg"
          leftBtnText="Custom order"
          rightBtnText= "Existing inventory"
          id = "Model-Y"
        />
        <Section
          title = "Model S"
          description = "Order Online for Touchless Delivery"
          backgroundImg = "model-s.jpg"
          leftBtnText="Custom order"
          rightBtnText= "Existing inventory"
          id = "Model-S"
        />
        <Section
          title = "Model 3"
          description = "Order Online for Touchless Delivery"
          backgroundImg = "model-3.jpg"
          leftBtnText="Custom order"
          rightBtnText= "Existing inventory"
          id = "Model-3"
        />
        <Section
          title = "Lowest Cost Solar Panels in America"
          description = "Money-back guarantee"
          backgroundImg = "solar-panel.jpg"
          leftBtnText="Order Now"
          rightBtnText= "Learn More"
          id = "solar-panel"
        />
        <Section
          title = "Accessories"
          backgroundImg = "accessories.jpg"
          leftBtnText="Shop Now"
          rightBtnText= ""
          id = "Accessories"
        />
        <ScrollWrapper>
          <ScrollToTop smooth/>
        </ScrollWrapper>
    </Container>
  )
}

export default Home

const Container = styled.div`
  height:100vh;
`
const ScrollWrapper = styled.div`
  height:40px;
`