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
import { useLanguage } from '../../contexts/LanguageContext';


export const HeroSection = () => {
  const { language } = useLanguage();

  const handleDownload = () => {
    const fileUrl = 'https://email-api-six.vercel.app/download-cv'; // URL do endpoint de download
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
          <GradientText>
            Hello, I'm{" "}
          </GradientText>
          <AnimatedText />
        </Title>
        <TextComponent>{language === 'en' ? 'Meu nome é Jordano. Estou sempre em busca de aprimorar minhas capacidades e compartilhar minhas qualidades e conhecimentos, com um foco constante na inovação. Tenho uma paixão profunda por tecnologia e programação, e adoro o desafio de resolver problemas, pois é isso que me faz crescer como profissional.' : 'My name is Jordano. I am always looking to improve my capabilities and share my qualities and knowledge, with a constant focus on innovation. I have a deep passion for technology and programming, and I love the challenge of solving problems, as that is what makes me grow as a professional.'}</TextComponent>
        <ButtonWrapper>
          <HeroButton type='hireMe' onClick={() => handleLinkOpen()} aria-label="Me contrate">
            {language === 'en' ? 'Me Contrate' : 'Hire Me'}
          </HeroButton>
          <HeroButton type="downloadCV" onClick={() => handleDownload()} aria-label="Download CV">
            <InnerButton>
              Download CV
            </InnerButton>
          </HeroButton>
        </ButtonWrapper>
      </Col>
      <Col span={5} className="self-center mt-4">
        <ImageWrapper type='hero-wrapper'>
          <img
            src="/images/hero_avatar.webp"
            alt="hero image"
          />
        </ImageWrapper>
      </Col>
    </Section>
  );
};

