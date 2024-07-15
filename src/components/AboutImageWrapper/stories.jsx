import React from 'react';
import { AboutImageWrapper } from '.';
import { StyledImage } from '../StyledImage/styles';

export default {
  title: 'AboutImageWrapper',
  component: AboutImageWrapper,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

const Template = (args) => (
  <AboutImageWrapper {...args}>
    <StyledImage src='/images/casual-image.webp' alt='About image' />
  </AboutImageWrapper>
);

export const Default = Template.bind({});
Default.args = {};