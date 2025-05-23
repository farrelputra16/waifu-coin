import styled from 'styled-components';
import Banner from './Banner';
import Logo from './Logo'
import {Facebook} from '../Icons/Facebook';
import {Instagram} from '../Icons/Instagram';
import {LinkedIn} from '../Icons/LinkedIn';
import {Twitter} from '../Icons/Twitter';

const Section = styled.section`
min-height: 100vh;
width:100vw;
background-color: ${props => props.theme.body};
position: relative;
color: ${props => props.theme.text};

display: flex;
/* justify-content: center;
align-items: center; */
flex-direction: column;
`;
const Container = styled.div`
width: 75%;
margin: 2rem auto;
display: flex;
justify-content: space-between;
align-items: center;

border-bottom: 1px solid ${props => props.theme.text};
`;
const Left = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;
const IconList = styled.div`
display: flex;
align-items: center;
margin: 0 auto;


&>*{
  padding-right: 0.5rem;
  transform: all 0.2s ease;

  &:hover{
    transform: scale(1.2);
  }
}
`;
const MenuItems = styled.ul`
list-style: none;
width: 50%;
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(3, 1fr);
grid-gap: 1rem;
`;
const Item = styled.li`
width: fit-content;
cursor: pointer;

&::after{
  content: ' ';
  display: block;
  width: 0%;
  height: 2px;
  background: ${props => props.theme.text};
  transition: width 0.3s ease;
}

&:hover::after{
  width: 100%;
}
`;
const Bottom = styled.div`
width: 75%;
margin: 0 auto;
display: flex;
justify-content: space-between;
align-items: center;

a{
  text-decoration: underline;
}
`;

function Footer() {
  const scrollTo = (id) =>{
    let element = document.getElementById(id);
  
    element.scrollIntoView({
      behavior: 'smooth',
      block:'start',
      inline:'nearest'
    })
  }
  return (
    <Section id='footer'>
      <Banner/>
      <Container>
      <Left>
        <Logo/>
      </Left>
      <MenuItems>
        <Item onClick={()=>scrollTo('home')}>Home</Item>
        <Item onClick={()=>scrollTo('roadmap')}>Roadmap</Item>
        <Item onClick={()=>scrollTo('about')}>About</Item>
        <Item onClick={()=>scrollTo('faq')}>Faq</Item>
      </MenuItems>
      </Container>
      <Bottom>
        <span>
        &copy; {new Date().getFullYear} Waifu Coin. All rights reserved.
        </span>
        <span>
        Made by <a href='' target='_blank' rel='noreferrer'>FP</a>
        </span>
      </Bottom>
    </Section>
  )
}

export default Footer