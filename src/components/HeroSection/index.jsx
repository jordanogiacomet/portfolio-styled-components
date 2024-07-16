/* eslint-disable react/no-unescaped-entities */

import { HeroContainer } from '../HeroContainer';
import { Col } from '../HeroContainer/styles';
import { AnimatedText } from '../AnimatedText';
import { Title } from '../Title';
import { TextComponent } from '../TextComponent'; 
import { GradientText } from '../GradientText';
import { Button } from '../Button';
import { InnerButton } from '../InnerButton';
import { ImageWrapper } from '../ImageWrapper';
import { ButtonWrapper } from '../ButtonWrapper';

export const HeroSection = () => {
  return (
   <section>
      <HeroContainer>
        <Col span={7}>
          <Title>
            <GradientText from='#1E90FF' via='#4169E1' to='#00008B'>
              Hello, I'm{" "}
            </GradientText>
            <AnimatedText />
          </Title>
          <TextComponent $colorDark={false}>Hello! Im a technology enthusiast with a deep love for programming. I believe in the power of technology to transform ideas into reality and improve our world. Every challenge I face in the world of coding is a chance to not only develop innovative solutions, but also to develop as a professional and individual.</TextComponent>
          <ButtonWrapper>
            <Button type="hireMe">
                  Hire Me
            </Button>
            <Button type="downloadCV">
                <InnerButton>
                  Download CV
                </InnerButton>
            </Button>
          </ButtonWrapper>
        </Col>
        <Col span={5} className="self-center mt-4">
            <ImageWrapper>
              <img
                src="/images/hero_avatar.png"
                alt="hero image"
              />
            </ImageWrapper>
          </Col>
      </HeroContainer>
   </section>
  );
};

