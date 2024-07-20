import React from 'react';
import { EmaiLSection } from '.';

export default {
  title: 'EmaiLSection',
  component: EmaiLSection,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

const Template = (args) => <EmaiLSection {...args} />;

export const Default = Template.bind({});
Default.args = {};