import ProjectTag from '.';

export default {
  title: 'ProjectTag',
  component: ProjectTag,
  args: {
    name: 'Web',
    isSelected: false,
  },
  argTypes: {
    name: { control: 'text' },
    isSelected: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
};

export const Default = (args) => <ProjectTag {...args} />;