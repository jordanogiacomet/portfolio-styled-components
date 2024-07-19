/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';
import { AboutButton } from '../AboutButton';
import { useState, useTransition } from 'react';
import { TabContent } from '../TabContent';
import { List } from '../List';
import { StyledImage } from '../StyledImage/styles';
import { GradientText } from '../GradientText';
import { Section } from '../Section';
import { ImageWrapper } from '../ImageWrapper';
import { Container } from '../Container';




const TAB_DATA = [
  {
    title: "hard-skills",
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
    title: "Education",
    id: "education",
    content: (
      <List>
        <li>Universidade de Caxias do Sul</li>
        <li>Alura - Cursos de Tecnologia</li>
        <li>Udemy - Cursos Online</li>
      </List>
    ),
  },
  {
    title: "soft-skills",
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
];

export const AboutSection = () => {
  const [tab, setTab] = useState("hard-skills");
  const [isPending, startTransition] = useTransition();
  
  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  
  return (
    <div id='about'>
      <Section type='about-section'>
        <ImageWrapper type='about-wrapper' className='image-content'>
          <StyledImage src='/images/casual-image.webp' alt='About image' loading="lazy"/>
        </ImageWrapper>
        <Container type='text-container-about'>
          <GradientText from='#1E90FF' via='#4169E1' to='#00008B'>
            <Heading as='h2' size='medium' colorDark={false}>Sobre mim</Heading>
          </GradientText>
          <TextComponent type="about">
          Sou desenvolvedor full stack com uma paixão por criar aplicações web interativas e responsivas. Tenho experiência com JavaScript, React, Redux, Node.js, Express, PostgreSQL, Sequelize, HTML, CSS, Next.js, Laravel e Git. Sou um aprendiz rápido e estou sempre buscando expandir meu conhecimento e habilidades. Destaco-me por minha comunicação eficaz, trabalho em equipe, resolução de problemas, adaptabilidade, gestão de tempo, pensamento crítico, inovação e criatividade, liderança, empatia e inteligência emocional, além de uma forte ética profissional.
          </TextComponent>
          <Container type='tab-container'>
            <AboutButton selectTab={() => handleTabChange("hard-skills")} active={tab === "hard-skills"}>Hard Skills</AboutButton>
            <AboutButton selectTab={() => handleTabChange("soft-skills")} active={tab === "soft-skills"}>Soft Skills</AboutButton>
            <AboutButton selectTab={() => handleTabChange("education")} active={tab === "education"}>Educação</AboutButton>
          </Container>
          <TabContent>{TAB_DATA.find((t) => t.id === tab).content}</TabContent>
        </Container>
      </Section>
    </div>
  );
};

AboutSection.propTypes = {

};