import { useState } from 'react';
import * as Styled from './styles';
import { Heading } from '../Heading';
import { TagContainer } from '../TagContainer';
import ProjectTag from '../ProjectTag';
import { CardContainer } from '../CardContainer';
import { ProjectCard } from '../ProjectCard';
import { GradientText } from '../GradientText';


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
    title: "Potography Portfolio Website",
    description: "Project 2 description",
    image: "/images/2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "Project 3 description",
    image: "/images/3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Food Ordering Application",
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
    <Styled.Container>
       <GradientText from='#1E90FF' via='#4169E1' to='#00008B'>
          <Heading as='h2' size='medium' colorDark={false}>Projects</Heading>
      </GradientText>
      <TagContainer>
        <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
        <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"} />
        <ProjectTag onClick={handleTagChange} name="Mobile" isSelected={tag === "Mobile"} />
      </TagContainer>
      <CardContainer>
      {filteredProjects.map((project) => (
          <ProjectCard key={project.id} imgUrl={project.image} title={project.title} description={project.description} gitUrl={project.gitUrl} previewUrl={project.previewUrl} />
        ))}
      </CardContainer>
    </Styled.Container>
  );
};

ProjectSection.propTypes = {

};