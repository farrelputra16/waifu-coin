import styled from "styled-components";
import Typewriter from "typewriter-effect";
import Button from './Button';

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  width: 80%;
  color: ${props => props.theme.text};
  align-self: flex-start;

  span{
    text-transform: useUpdate;
    font-family:'Akaya Telivigala', cursive;
}
.text-1{
    color: blue;
}
.text-2{
    color: orange;
}
.text-3{
    color: red;
}
`;

const SubTitle = styled.h3`
font-size: ${(props)=>props.theme.fontlg};
text-transform: capitalize;
color: ${props => `rgba(${props.theme.textRgba}, 0.6)`};
font-weight:600;
margin-bottom:1rem;
width: 80%;
align-self: flex-start;
`;

const ButtonContainer = styled.div`
width: 80%;
align-self: flex-start;
`;



function TypeWriterText() {
  return (
    <>
        <Title>
      Discover Beautiful Waifu Coin
      <Typewriter
      options={{
        autoStart: true,
        loop: true,
      }}
        onInit={(typewriter) => {
          typewriter.typeString('<span class="text-1">Sexy.</span>')
          .pauseFor(2000)
          .deleteAll()
          .typeString('<span class="text-2">Beatifull.</span>')
          .pauseFor(2000)
          .deleteAll()
          .typeString('<span class="text-3">Pumping</span>')
          .pauseFor(2000)
          .deleteAll()
          .start()
        }}
      />
    </Title>
    <SubTitle>Bored Of Larps? See the beautiful waifus</SubTitle>
    <ButtonContainer>
        <Button text="Explore" link="#about"/>
    </ButtonContainer>
    </>
  );
}

export default TypeWriterText;
