import React from "react";
import props from "prop-types";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import { Link, animateScroll as scroll } from "react-scroll";

function Section({
  title,
  description,
  leftBtnText,
  rightBtnText,
  backgroundImg,
}) {
  return (
    <Wrap bgImage={backgroundImg}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>
      <Buttons>
        <Fade>
          <ButtonGroup>
            <LeftButton>{leftBtnText}</LeftButton>
            {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
          </ButtonGroup>
        </Fade>
        <Link
                activeClass="active"
                to="Model-S"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
        >
          <DownArrow src="/images/down-arrow.svg" />
        </Link>
      </Buttons>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;
const Buttons = styled.div``;
const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
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
  margin: 8px;
`;

const RightButton = styled(LeftButton)`
  background: white;
  color: black;
  opacity: 0.65;
`;

const DownArrow = styled.div`
  margin-top: 20px;
  height: 40px;
  animation: animateDown infinite 1.5s;
  background-image: ${(props) => `url(${props.src})`};
  background-position: center;
  background-repeat: no-repeat;
  cursor:pointer;
`;
