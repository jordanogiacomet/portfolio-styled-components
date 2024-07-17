import { useState } from 'react';
import { Heading } from '../Heading';
import ProjectTag from '../ProjectTag';
import { ProjectCard } from '../ProjectCard';
import { GradientText } from '../GradientText';
import { Section } from '../Section';
import { Container } from '../Container';


const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Project 1 description",
    image: "/images/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "ERP Meio Ambiente API",
    description: "Project 2 description",
    image: "/images/2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Agenda de Contatos",
    description: "Project 3 description",
    image: "/images/3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Aluraflix API",
    description: "Project 4 description",
    image: "/images/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "React Firebase Template",
    description: "Authentication and CRUD operations",
    image: "/images/5.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Full-stack Roadmap",
    description: "Project 5 description",
    image: "/images/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];


export const ProjectSection = () => {
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
            <GradientText from='#1E90FF' via='#4169E1' to='#00008B'>
                <Heading as='h2' size='medium' colorDark={false}>Projects</Heading>
            </GradientText>
            <Container type='tag-container'>
              <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
              <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"} />
              <ProjectTag onClick={handleTagChange} name="Mobile" isSelected={tag === "Mobile"} />
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