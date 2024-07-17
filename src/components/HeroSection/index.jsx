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
    const fileUrl = './files/curriculo'; // Substitua pelo caminho real do seu CV
    const a = document.createElement('a');
    a.href = fileUrl;
    a.download = 'Curriculo.pdf'; // Nome do arquivo que será baixado
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
        <TextComponent $colorDark={false}>Hello! Im a technology enthusiast with a deep love for programming. I believe in the power of technology to transform ideas into reality and improve our world. Every challenge I face in the world of coding is a chance to not only develop innovative solutions, but also to develop as a professional and individual.</TextComponent>
        <ButtonWrapper>
          <HeroButton type='hireMe' onClick={() => handleLinkOpen()}>
            Hire Me
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

