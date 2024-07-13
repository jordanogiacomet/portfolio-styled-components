import P from 'prop-types';
import * as Styled from './styles';
import { HeroContainer } from '../HeroContainer';
import { Heading } from '../Heading';
import { Col } from '../HeroContainer/styles';
import { AnimatedText } from '../TypeAnimation';

export const HeroSection = () => {
  return (
   <section>
      <HeroContainer>
        <Col span={7}>
          <Heading $colorDark={true} $size="small" $uppercase={false}>Olá, eu sou{" "}</Heading>
          <br />
          <AnimatedText />
        </Col>
      </HeroContainer>
   </section>
  );
};

HeroSection.propTypes = {
 
};