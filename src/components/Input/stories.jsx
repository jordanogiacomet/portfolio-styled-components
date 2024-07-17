import React from 'react';
import { Input } from '.';

export default {
  title: 'Input',
  component: Input,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'email',
  type: 'email',
  id: 'email',
  required: true,
  placeholder: 'user@example.com',
};
