import React from 'react';
import { AboutSection } from '.';
import { renderTheme } from '../../styles/render-theme';

export default {
  title: 'AboutSection',
  component: AboutSection,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

const Template = (args) => renderTheme(<AboutSection {...args} />);

export const Default = Template.bind({});
Default.args = {};