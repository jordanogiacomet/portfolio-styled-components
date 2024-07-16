import { ProjectSection } from '.';

export default {
  title: 'ProjectSection',
  component: ProjectSection,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const Default = () => <ProjectSection />;