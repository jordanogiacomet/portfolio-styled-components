import React from 'react';
import { AboutImageWrapper } from '.';
import { StyledImage } from '../StyledImage';
import { renderTheme } from '../../styles/render-theme';

export default {
  title: 'AboutImageWrapper',
  component: AboutImageWrapper,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

const Template = (args) => renderTheme(
  <AboutImageWrapper {...args}>
    <StyledImage src='/images/casual-image.webp' alt='About image' />
  </AboutImageWrapper>
);

export const Default = Template.bind({});
Default.args = {};