import { ImageContainer } from '.';

export default {
  title: 'ImageContainer',
  component: ImageContainer,
  args: {
    imgUrl: '/images/1.png',
    children: 'Image Container Content',
  },
  argTypes: {
    imgUrl: { type: 'string' },
    children: { type: 'string' },
  },
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
};

export const Default = (args) => <ImageContainer {...args} />;