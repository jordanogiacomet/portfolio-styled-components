/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import * as Styled from './styles';
import { AboutImageWrapper } from '../AboutImageWrapper';
import { TextContainer } from '../TextContainer';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';
import { TabContainerButton } from '../TabContainerButton';
import { AboutButton } from '../AboutButton';
import { useState, useTransition } from 'react';
import { TabContent } from '../TabContent';
import { List } from '../List';
import { StyledImage } from '../StyledImage/styles';
import { GradientText } from '../GradientText';




const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <List>
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>Sequelize</li>
        <li>JavaScript</li>
        <li>React</li>
      </List>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <List>
        <li>Fullstack Academy of Code</li>
        <li>University of California, Santa Cruz</li>
      </List>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <List>
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </List>
    ),
  },
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
    <Styled.Container>
      <AboutImageWrapper>
        <StyledImage src='/images/casual-image.webp' alt='About image'/>
      </AboutImageWrapper>
      <TextContainer>
        <GradientText from='#1E90FF' via='#4169E1' to='#00008B'>
          <Heading as='h2' size='small' colorDark={false}>About Me</Heading>
        </GradientText>
        <TextComponent>
        I am a full stack web developer with a passion for creating interactive and responsive web applications. I have experience working with JavaScript, React, Redux, Node.js, Express, PostgreSQL, Sequelize, HTML, CSS, and Git. I am a quick learner and I am always looking to expand my knowledge and skill set. I am a team player and I am excited to work with others to create amazing applications.
        I am a full stack web developer with a passion for creating interactive and responsive web applications. I have experience working with JavaScript, React, Redux, Node.js, Express, PostgreSQL, Sequelize, HTML, CSS, and Git. I am a quick learner and I am always looking to expand my knowledge and skill set. I am a team player and I am excited to work with others to create amazing applications.
        </TextComponent>
        <TabContainerButton>
          <AboutButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>Skills</AboutButton>
          <AboutButton selectTab={() => handleTabChange("education")} active={tab === "education"}>Education</AboutButton>
          <AboutButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}>Certifications</AboutButton>
        </TabContainerButton>
        <TabContent>{TAB_DATA.find((t) => t.id === tab).content}</TabContent>
      </TextContainer>
    </Styled.Container>
  );
};

AboutSection.propTypes = {

};