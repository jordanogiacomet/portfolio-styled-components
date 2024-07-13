/* eslint-disable react/no-unescaped-entities */

import { HeroContainer } from '../HeroContainer';
import { Col } from '../HeroContainer/styles';
import { AnimatedText } from '../AnimatedText';
import { Title } from '../Title';
import { TextComponent } from '../TextComponent'; 
import { GradientText } from '../GradientText';


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
          <TextComponent $colorDark={false}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet optio autem eveniet molestias, obcaecati nam ab numquam blanditiis ipsam minima odio quidem ea accusantium minus similique deleniti itaque rem. Ab!</TextComponent>
        </Col>
      </HeroContainer>
   </section>
  );
};

