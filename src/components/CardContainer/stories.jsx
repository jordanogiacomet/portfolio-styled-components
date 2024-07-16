import { CardContainer } from '.';

export default {
  title: 'CardContainer',
  component: CardContainer,
  args: {
    children: 'Card Container Content',
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

export const Default = (args) => <CardContainer {...args} />;
