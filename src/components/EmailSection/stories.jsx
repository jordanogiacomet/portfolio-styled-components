import React from 'react';
import { EmailSection } from '.';

export default {
  title: 'EmaiLSection',
  component: EmailSection,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

const Template = (args) => <EmailSection {...args} />;

export const Default = Template.bind({});
Default.args = {};