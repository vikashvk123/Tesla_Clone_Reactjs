import React,{useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import { style } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';
import {selectCars} from '../features/car/carSlice'
import {useSelector} from 'react-redux'

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars)

  // scrollToTop = () => {
  //   scroll.scrollToTop();
  // };
  return (
    <Container>
      <a>
        <img src = "/images/logo.svg" alt = "" />
      </a>
      <Menu>
        {
          cars && cars.map((car,index)=>(
            <a key={index} href='#'>{car}</a>
          ))
        }
      </Menu>

      <RightMenu>
        <a href='#'>Shop</a>
        <a href='#'>Tesla Account</a>
        <CustomMenu onClick={()=>setBurgerStatus(true)}/>
      </RightMenu>
      <BurgerNav show = {burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={()=>setBurgerStatus(false)}/>
        </CloseWrapper>
        {
          cars && cars.map((car,index)=>(
            <li key = {index}><a href='#'>{car}</a></li>
          ))
        }
        
        <li><a href='#'>Used Inventory</a></li>
        <li><a href='#'>Trade-in</a></li>
        <li><a href='#'>Cybertruck</a></li>
        <li><a href='#'>Roadster</a></li>
        <li><a href='#'>Existing Inventory</a></li>

      </BurgerNav>
    </Container>
  )
}

export default Header

const Container = styled.div`
  min-height:60px;
 
  position:fixed;
  display:flex;
  align-item:center;
  justify-content:space-between;
  padding:15px 20px;
  width:100%;
  z-index:1;
`
const Menu = styled.div`
  
  display:flex;
  justify-content:center;
  align-items:center;
  flex :1;
  a{
    font-weight:500;
    padding:0 10px;
  }
  @media (max-width:768px){
    display:none;
  }
`

const RightMenu = styled.div`

  display:flex;
  align-items:center;
  a{
    font-weight:500;
    margin-right:10px;
  }
  // @media (max-width:768px){
  //   a{
  //     font-weight:400;
  //     padding:0 10px;
  //     font-height:0.5em;
  //   }
  // }

`

const CustomMenu = styled(MenuIcon)`
  cursor:pointer;
`

const BurgerNav = styled.div`
 
  position:fixed;
  top:0;
  bottom:0;
  right:0;
  background-color:white;
  width:300px;
  z-index:16;
  list-style:none;
  padding:20px;
  display:flex ;
  flex-direction:column;
  transform:${props=>props.show?'translateX(0)':'translateX(100%)'};
  transition:0.2s;
  li{
    padding:15px 0;
    border-bottom: 1px solid rgba(0,0,0,.2);

    a{
      font-weight:600;
    }

  }
`

const CustomClose = styled(CloseIcon)`
  // border:2px solid red;
  cursor:pointer;
`

const CloseWrapper = styled.div`
  // border:2px solid green;
  display:flex;
  justify-content:end;
`