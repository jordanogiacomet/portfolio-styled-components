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
            <GradientText>
              Hello, I'm{" "}
            </GradientText>
            <AnimatedText />
          </Title>
          <TextComponent $colorDark={false}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet optio autem eveniet molestias, obcaecati nam ab numquam blanditiis ipsam minima odio quidem ea accusantium minus similique deleniti itaque rem. Ab!Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet optio autem eveniet molestias, obcaecati nam ab numquam blanditiis ipsam minima odio quidem ea accusantium minus similique deleniti itaque rem. Ab!Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet optio autem eveniet molestias, obcaecati nam ab numquam blanditiis ipsam minima odio quidem ea accusantium minus similique deleniti itaque rem. Ab!</TextComponent>
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
                src="/images/hero-image.png"
                alt="hero image"
              />
            </ImageWrapper>
          </Col>
      </HeroContainer>
   </section>
  );
};

