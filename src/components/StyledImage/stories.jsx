import React from 'react';
import { StyledImage } from './styles';


export default {
  title: 'StyledImage',
  component: StyledImage,
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

const Template = (args) => <StyledImage {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: '/images/casual-image.webp',
  alt: 'Example Image',
};