import React from 'react';
import { Footer } from '.';

export default {
  title: 'Footer',
  component: Footer,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

const Template = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {};
