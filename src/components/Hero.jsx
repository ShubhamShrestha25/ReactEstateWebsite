import React from 'react';
import styled, {css} from 'styled-components/macro';
import { Button } from './Button';
import { IoMdArrowRoundForward} from 'react-icons/io';
import { IoArrowForward,IoArrowBack} from 'react-icons/io5';

const HeroSection = styled.section`
height: 100vh;
max-height: 1100px;
postion: relative;
overflow: hidden;
`;

const HeroWrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
position: relative;
`;

const HeroSlide = styled.div`
z-index: 1;
width: 100%;
height: 100%;
`;

const HeroSlider = styled.div`
postion: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
`;

const HeroImage = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
object-fit: cover;
`;

const HeroContent = styled.div``;
const Arrow = styled(IoMdArrowRoundForward)``;

const SliderButtons = styled.div`
position: absolute;
bottom: 50px;
right:50px;
display:flex;
z-index: 10;
`;


const arrowButtons = css`
width: 50px;
height: 50px;
color: #fff;
cursor: pointer;
background: #000d1a;
border-radius: 50px;
padding: 10px;
margin-right: 1rem;
user-select: none;
transition: 0.3s;

&:hover {
background: #cd853f;
transform: scale(1.05);
}
`;

const PrevArrow =styled(IoArrowBack)`
${arrowButtons}
`;

const NextArrow =styled(IoArrowForward)`
${arrowButtons}
`;


const Hero = ({slides}) => {
    return (
        <HeroSection>
            <HeroWrapper>
            {slides.map((slide, index) => {
                return (
                    <HeroSlide key={index}>
                        <HeroSlider>
                            <HeroImage src={slide.image} alt={slide.alt} />
                            <HeroContent>
                                <h1>{slide.title}</h1>
                                <p>{slide.price}</p>
                                <Button to={slide.path} primary='true'
                                css={`max-width: 160px`}                            
                                >{slide.label} 
                                <Arrow />
                                </Button>
                            </HeroContent>
                        </HeroSlider>
                    </HeroSlide>
                )
            })}
            <SliderButtons>
                <PrevArrow />
                <NextArrow />
            </SliderButtons>
            </HeroWrapper>
        </HeroSection>
    )
}

export default Hero
