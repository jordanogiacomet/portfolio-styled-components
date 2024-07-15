import React from 'react';
import { StyledImage } from '.';
import { renderTheme } from '../../styles/render-theme';

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

const Template = (args) => renderTheme(<StyledImage {...args} />);

export const Default = Template.bind({});
Default.args = {
  src: '/images/casual-image.webp',
  alt: 'Example Image',
};