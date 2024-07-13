import { Title } from '.';

export default {
  title: 'Title',
  component: Title,
  args: {
    children: 'Texto de exemplo',
  },
  argTypes: {
    children: { control: 'text' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

const Template = (args) => (
    <Title {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: 'Texto de exemplo',
};

