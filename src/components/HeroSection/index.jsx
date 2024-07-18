/* eslint-disable react/no-unescaped-entities */
import { Col } from '../HeroContainer/styles';
import { AnimatedText } from '../AnimatedText';
import { Title } from '../Title';
import { TextComponent } from '../TextComponent';
import { GradientText } from '../GradientText';
import { HeroButton } from '../HeroButton';
import { InnerButton } from '../InnerButton';
import { ImageWrapper } from '../ImageWrapper';
import { ButtonWrapper } from '../ButtonWrapper';
import { Section } from '../Section';

export const HeroSection = () => {
  const handleDownload = () => {
    const fileUrl = './files/curriculo.pdf'; 
    const a = document.createElement('a');
    a.href = fileUrl;
    a.download = 'Curriculo.pdf'; 
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
  const handleLinkOpen = () => {
    window.open('https://www.linkedin.com/in/jordano-giacomet-tomazoni-aba346184/', '_blank');
  };
  return (
    <Section type='hero-section'>
      <Col span={7}>
        <Title>
          <GradientText from='#1E90FF' via='#4169E1' to='#00008B'>
            Hello, I'm{" "}
          </GradientText>
          <AnimatedText />
        </Title>
        <TextComponent $colorDark={false}>Meu nome é Jordano. Estou sempre em busca de aprimorar minhas capacidades e compartilhar minhas qualidades e conhecimentos, com um foco constante na inovação. Tenho uma paixão profunda por tecnologia e programação, e adoro o desafio de resolver problemas, pois é isso que me faz crescer como profissional. </TextComponent>
        <ButtonWrapper>
          <HeroButton type='hireMe' onClick={() => handleLinkOpen()}>
            Me contrate
          </HeroButton>
          <HeroButton type="downloadCV" onClick={() => handleDownload()}>
            <InnerButton>
              Download CV
            </InnerButton>
          </HeroButton>
        </ButtonWrapper>
      </Col>
      <Col span={5} className="self-center mt-4">
        <ImageWrapper type='hero-wrapper'>
          <img
            src="/images/hero_avatar.png"
            alt="hero image"
          />
        </ImageWrapper>
      </Col>
    </Section>
  );
};

