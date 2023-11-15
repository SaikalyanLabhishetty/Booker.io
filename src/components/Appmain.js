import React from 'react';
import styled from 'styled-components';
import Appheader from './Appheader';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Carousel from '@itseasy21/react-elastic-carousel';
import { locations, breakpoints, property, breakpoints_2 } from './export';
import Appfooter from './Appfooter';

const Section1 = styled.div`
  height: 40.25rem;
  background-image: url(https://i.imgur.com/vKX2T7P.gif);
  background-size: 100% 100%;
  color: white;
  font-family: 'Unbounded', sans-serif;
`;

const TextContainer = styled.p`
  padding-top: 18rem;
  padding-left: 3rem;
  width: 30rem;
  font-size: 2rem;
  background-color: transparent;
`;

const HighlightedText = styled.span`
  color: #c0c0c0;
  font-size: 2rem;
  background: transparent;
`;

const SliderTitle = styled.h1`
  color: white;
  text-align: center;
  margin-top: 3rem;
`;

const CarouselContainer = styled(Carousel)`
  color: white;
  margin-top: 2rem;
  margin-bottom: 3rem;
`;

const PlaceImage = styled.img`
  height: 10rem;
  width: 15rem;
  border-radius: 1rem;
`;

const SliderContainer = styled.div`
  text-align: center;
`;

const AppMain = () => {
  const [text] = useTypewriter({
    words: ['Hotels', 'Apartments', 'Resorts', 'Villas', 'Cabins', 'Cottages', 'Glamping', 'Serviced Apartments', 'Vacation Homes', 'Guest House', 'Hostel', 'Motels'],
    loop: 0,
  });

  return (
    <>
      <Appheader />
      <Section1>
        <TextContainer>
          Booker.io helps you to book <HighlightedText>{text}</HighlightedText>
          <Cursor cursorColor='red' />
        </TextContainer>
      </Section1>
      <SliderContainer>
        <SliderTitle>Book anywhere in India</SliderTitle>
        <CarouselContainer breakPoints={breakpoints} className='carousel'>
          {locations.map((locat) => (
            <div key={locat.id}>
              <PlaceImage src={locat.image} alt={locat.title} />
              <p style={{ textAlign: 'center' }}>{locat.title}</p>
            </div>
          ))}
        </CarouselContainer>
      </SliderContainer>
      <SliderContainer>
        <SliderTitle>List of properties available</SliderTitle>
        <CarouselContainer breakPoints={breakpoints_2} className='carousel'>
          {property.map((prop) => (
            <div key={prop.id}>
              <PlaceImage src={prop.image} alt={prop.name} />
              <p style={{ textAlign: 'center' }}>{prop.name}</p>
            </div>
          ))}
        </CarouselContainer>
      </SliderContainer>
      <Appfooter />
    </>
  );
};

export default AppMain;
