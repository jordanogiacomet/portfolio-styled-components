/* eslint-disable no-unused-vars */
import React, { useState, useTransition } from 'react';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';
import { AboutButton } from '../AboutButton';
import { TabContent } from '../TabContent';
import { List } from '../List';
import { StyledImage } from '../StyledImage/styles';
import { GradientText } from '../GradientText';
import { Section } from '../Section';
import { ImageWrapper } from '../ImageWrapper';
import { Container } from '../Container';
import { useLanguage } from '../../contexts/LanguageContext';

const TAB_DATA_PT = [
  {
    title: "Hard Skills",
    id: "hard-skills",
    content: (
      <List>
        <li>Node.js</li>
        <li>Express</li>
        <li>MySQL</li>
        <li>Sequelize</li>
        <li>JavaScript</li>
        <li>Next.js</li>
        <li>Laravel</li>
      </List>
    ),
  },
  {
    title: "Soft Skills",
    id: "soft-skills",
    content: (
      <List>
        <li>Comunicação eficaz</li>
        <li>Trabalho em equipe</li>
        <li>Resolução de problemas</li>
        <li>Adaptabilidade</li>
        <li>Gestão de tempo</li>
        <li>Pensamento crítico</li>
        <li>Inovação e criatividade</li>
        <li>Liderança</li>
        <li>Empatia e inteligência emocional</li>
        <li>Ética profissional</li>
      </List>
    ),
  },
  {
    title: "Educação",
    id: "education",
    content: (
      <List>
        <li>Universidade de Caxias do Sul</li>
        <li>Alura - Cursos de Tecnologia</li>
        <li>Udemy - Cursos Online</li>
      </List>
    ),
  },
];

const TAB_DATA_EN = [
  {
    title: "Hard Skills",
    id: "hard-skills",
    content: (
      <List>
        <li>Node.js</li>
        <li>Express</li>
        <li>MySQL</li>
        <li>Sequelize</li>
        <li>JavaScript</li>
        <li>Next.js</li>
        <li>Laravel</li>
      </List>
    ),
  },
  {
    title: "Soft Skills",
    id: "soft-skills",
    content: (
      <List>
        <li>Effective communication</li>
        <li>Teamwork</li>
        <li>Troubleshooting</li>
        <li>Adaptability</li>
        <li>Time management</li>
        <li>Critical thinking</li>
        <li>Innovation and creativity</li>
        <li>Leadership</li>
        <li>Empathy and emotional intelligence</li>
        <li>Professional ethics</li>
      </List>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <List>
        <li>University of Caxias do Sul</li>
        <li>Alura - Technology Courses</li>
        <li>Udemy - Online Courses</li>
      </List>
    ),
  },
];

export const AboutSection = () => {
  const { language } = useLanguage();
  const [tab, setTab] = useState("hard-skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const tabData = language === 'en' ? TAB_DATA_PT : TAB_DATA_EN;

  return (
    <div id='about'>
      <Section type='about-section'>
        <ImageWrapper type='about-wrapper' className='image-content'>
          <StyledImage src='/images/casual-image.webp' alt='About image' loading="lazy" />
        </ImageWrapper>
        <Container type='text-container-about'>
          <GradientText from='#1E90FF' via='#4169E1' to='#00008B'>
            <Heading as='h2' size='medium' colorDark={false}>
              {language === 'en' ? 'Sobre mim' : 'About me'}
            </Heading>
          </GradientText>
          <TextComponent type="about">
            {language === 'en'
              ? 'Sou desenvolvedor full stack com uma paixão por criar aplicações web interativas e responsivas. Tenho experiência com JavaScript, React, Redux, Node.js, Express, PostgreSQL, Sequelize, HTML, CSS, Next.js, Laravel e Git. Sou um aprendiz rápido e estou sempre buscando expandir meu conhecimento e habilidades. Destaco-me por minha comunicação eficaz, trabalho em equipe, resolução de problemas, adaptabilidade, gestão de tempo, pensamento crítico, inovação e criatividade, liderança, empatia e inteligência emocional, além de uma forte ética profissional.'
              : 'I am a full stack developer with a passion for creating interactive and responsive web applications. I have experience with JavaScript, React, Redux, Node.js, Express, PostgreSQL, Sequelize, HTML, CSS, Next.js, Laravel and Git. I am a quick learner and am always looking to expand my knowledge and skills. I stand out for my effective communication, teamwork, problem solving, adaptability, time management, critical thinking, innovation and creativity, leadership, empathy and emotional intelligence, as well as a strong professional ethic.'}
          </TextComponent>
          <Container type='tab-container'>
            {tabData.map((tabItem) => (
              <AboutButton
                key={tabItem.id}
                selectTab={() => handleTabChange(tabItem.id)}
                active={tab === tabItem.id}
              >
                {tabItem.title}
              </AboutButton>
            ))}
          </Container>
          <TabContent>
            {tabData.find((t) => t.id === tab)?.content}
          </TabContent>
        </Container>
      </Section>
    </div>
  );
};

AboutSection.propTypes = {};
