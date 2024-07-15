import React from 'react';
import { AboutSection } from '.';


export default {
  title: 'AboutSection',
  component: AboutSection,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

const Template = (args) => <AboutSection {...args} />;

export const Default = Template.bind({});
Default.args = {};