import { useState } from 'react';
import { Heading } from '../Heading';
import ProjectTag from '../ProjectTag';
import { ProjectCard } from '../ProjectCard';
import { GradientText } from '../GradientText';
import { Section } from '../Section';
import { Container } from '../Container';
import { useLanguage } from '../../contexts/LanguageContext';


const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/1.webp",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/jordanogiacomet/portfolio-styled-components",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "ERP Meio Ambiente API",
    description: "Project 2 description",
    image: "/images/2.webp",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/jordanogiacomet/ERPMeioAmbiente",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Agenda de Contatos",
    description: "Project 3 description",
    image: "/images/3.webp",
    tag: ["All", "Desktop"],
    gitUrl: "https://github.com/jordanogiacomet/Agenda-de-Contatos",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Aluraflix API",
    description: "Project 4 description",
    image: "/images/4.webp",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/jordanogiacomet/AluraFlixAPI",
    previewUrl: "/",
  },
];


export const ProjectSection = () => {
  const { language } = useLanguage();
  const [tag, setTag] = useState("All");
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };
  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );
  return (
    <div id='projects'>
      <Section type='projects-section'>
        <GradientText>
          <Heading as='h2' size='medium' colorDark={false}>{language === 'en' ? 'Projetos' : 'Projects'}</Heading>
        </GradientText>
        <Container type='tag-container'>
          <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"}>{language === 'en' ? 'Todos' : 'All'}</ProjectTag>
          <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"}>Web</ProjectTag>
          <ProjectTag onClick={handleTagChange} name="Desktop" isSelected={tag === "Desktop"}>Desktop</ProjectTag>
        </Container>
        <Container type='card-container'>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} imgUrl={project.image} title={project.title} description={project.description} gitUrl={project.gitUrl} previewUrl={project.previewUrl} />
          ))}
        </Container>
      </Section>
    </div>
  );
};

ProjectSection.propTypes = {

};