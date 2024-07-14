import React from 'react';
import { Navbar } from '.';

export default {
  title: 'Navbar',
  component: Navbar,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

const Template = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = {};