import { ProjectCard } from '.';

export default {
  title: 'ProjectCard',
  component: ProjectCard,
  args: {
    imgUrl: '/images/1.png',
    title: 'React Portfolio Website',
    gitUrl: 'https://github.com',
    previewUrl: 'https://preview.com',
  },
  argTypes: {
    imgUrl: { type: 'string' },
    title: { type: 'string' },
    gitUrl: { type: 'string' },
    previewUrl: { type: 'string' },
  },
};

export const Default = (args) => <ProjectCard {...args} />;