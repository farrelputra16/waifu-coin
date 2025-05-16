import  styled, { ThemeProvider } from 'styled-components';
import Carousel from '../Carousel';
import Button from '../Button';
import { dark } from '../../styles/Themes'

const Container = styled.div`
  width: 75%;
  margin: 0 auto;
  ${'' /* background-color: lightblue; */}


  display: flex;
  justify-content: center;
  align-items:center;
`;
const Box = styled.div`
width:50%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;
const Section = styled.section`
min-height:100vh;
width: 100%;
background-color: ${props => props.theme.text};

display:flex;
justify-content: center;
align-items: center;
position: relative;
`;
const Title = styled.h2`
font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${props => props.theme.body};
  align-self: flex-start;
  width: 80%;
  margin: 0 auto;
`;
const SubText = styled.p`
font-size: ${(props) => props.theme.fontlg};
  color: ${props => props.theme.body};
  align-self: flex-start;
  width: 80%;
  margin: 1rem auto;
  font-weight:400;
`;
const SubTextLight = styled.p`
font-size: ${(props) => props.theme.fontmd};
  color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
  align-self: flex-start;
  width: 80%;
  margin: 1rem auto;
  font-weight:400;
`;
const ButtonContainer = styled.div`
width: 80%;
margin: 0 auto;
align-self: flex-start;
`;




function About() {
  return (
    <Section id='about'>
      <Container>
        <Box> <Carousel/> </Box>
        <Box><Title>Welcome To The Waifu Community.
        </Title>
        <SubText>
        The Waifu Coin is a Community Coin which is based by Waifu Lovers
        </SubText>
        <SubTextLight>
        With Based Community and Dev, this coin will bring us to meet our waifus
        </SubTextLight>
        <ButtonContainer>
          <ThemeProvider theme={dark}>
            <Button text="JOIN OUR TELEGRAM" link="#"/>
          </ThemeProvider>
        </ButtonContainer>
        </Box>
      </Container>
    </Section>
  )
}

export default About