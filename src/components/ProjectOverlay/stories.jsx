import { ProjectOverlay } from '.';

export default {
  title: 'ProjectOverlay',
  component: ProjectOverlay,
  args: {
    children: 'Overlay Content',
  },
  argTypes: {
    children: { type: 'string' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const Default = (args) => <ProjectOverlay {...args} />;