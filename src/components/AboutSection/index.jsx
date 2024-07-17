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
    title: "Skills",
    id: "skills",
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
 /* { 
    title: "Certifications",
    id: "certifications",
    content: (
      <List>
        <li>Programa de Talentos: Algoritmos; - Javascript; - PL/SQL, Java e Python</li>
        <li>Formação Java e Orientação a Objeto</li>
        <li>Formação - Criação de Games</li>
      </List>
    ),
  },
 */
];

export const AboutSection = () => {
  const [tab, setTab] = useState("skills");
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
          <StyledImage src='/images/casual-image.webp' alt='About image'/>
        </ImageWrapper>
        <Container type='text-container-about'>
          <GradientText from='#1E90FF' via='#4169E1' to='#00008B'>
            <Heading as='h2' size='medium' colorDark={false}>About Me</Heading>
          </GradientText>
          <TextComponent type="about">
          I am a full stack web developer with a passion for creating interactive and responsive web applications. I have experience working with JavaScript, React, Redux, Node.js, Express, PostgreSQL, Sequelize, HTML, CSS, and Git. I am a quick learner and I am always looking to expand my knowledge and skill set. I am a team player and I am excited to work with others to create amazing applications.
          I am a full stack web developer with a passion for creating interactive and responsive web applications. I have experience working with JavaScript, React, Redux, Node.js, Express, PostgreSQL, Sequelize, HTML, CSS, and Git. I am a quick learner and I am always looking to expand my knowledge and skill set. I am a team player and I am excited to work with others to create amazing applications.
          </TextComponent>
          <Container type='tab-container'>
            <AboutButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>Skills</AboutButton>
            <AboutButton selectTab={() => handleTabChange("education")} active={tab === "education"}>Education</AboutButton>
            {/*<AboutButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}>Certifications</AboutButton>*/}
          </Container>
          <TabContent>{TAB_DATA.find((t) => t.id === tab).content}</TabContent>
        </Container>
      </Section>
    </div>
  );
};

AboutSection.propTypes = {

};