import styled from 'styled-components';
import Accordion from '../Accordion';
import { useLayoutEffect, useRef } from 'react'
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";


const Section = styled.section`
min-height: 100vh;
width:100vw;
background-color: ${props => props.theme.text};
position: relative;
color: ${props => props.theme.body};

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: uppercase;
  color: ${props => props.theme.body};

  margin:  1rem auto;
  border-bottom: 2px solid ${props => props.theme.body};
  width: fit-content;
`;
const Container = styled.div`
width: 75%;
margin: 2rem auto;
display: flex;
justify-content: space-between;
align-items: center;
`;
const Box = styled.div`
width: 45%;
`
function Faq() {

  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(()=> {

    let element = ref.current;

    const scrollMetho = ScrollTrigger.create({
      trigger: element,
      start:'top top',
      end:'bottom top',
      pin: true,
      pinSpacing:false,
      scrub: true,
      markers: false,
    })


    return () => {
      scrollMetho.kill();
    }
  },[])

  return (
    <Section ref={ref} id='faq'>
    <Title>FAQ</Title>
    <Container>
    <Box>
      <Accordion title="WHAT IS WAIFU COIN?">
      Community Based Coin full of Waifus Lover.
      </Accordion>
      <Accordion title="WHEN DEX GETTING PAY?">
      Dex will be paid at 30K.
      </Accordion>
      <Accordion title="WHEN BOOST?">
      Boost will be added at 40K.
      </Accordion>
    </Box>
    <Box>
      <Accordion title="WHEN KOL?">
      Kols will call after bond.
      </Accordion>
      <Accordion title="WHEN LAUNCH">
      Launch will be at 16 May.
      </Accordion>
      <Accordion title="WHEN PUMP?">
      Shill and Buy and let team do the rest.
      </Accordion>
    </Box>
    </Container>
    </Section>
  )
}

export default Faq