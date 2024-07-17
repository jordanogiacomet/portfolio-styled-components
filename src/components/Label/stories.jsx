import React from 'react';
import { Label } from '.';

export default {
  title: 'Label',
  component: Label,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

const Template = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  htmlFor: 'email',
  children: 'Your email',
};