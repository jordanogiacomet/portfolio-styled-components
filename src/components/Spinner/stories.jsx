import React from 'react';
import { Spinner } from '.';

export default {
  title: 'Spinner',
  component: Spinner,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

const Template = (args) => <Spinner {...args} />;

export const Default = Template.bind({});
Default.args = {};
