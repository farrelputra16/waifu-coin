import styled from 'styled-components';
import Image from '../assets/waifu-coin.png'; // Replace with your image path

const ImageContainer = styled.div`
  width: 100%;
  img {
    width: 100%;
    height: auto;
  }
`;

function CoverImage() {
  return (
    <ImageContainer>
      <img src={Image} alt="Cover" />
    </ImageContainer>
  );
}

export default CoverImage;