import React from 'react';
import { TextArea } from '.';

export default {
  title: 'TextArea',
  component: TextArea,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

const Template = (args) => <TextArea {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'message',
  id: 'message',
  required: true,
  placeholder: "Let's talk about...",
};