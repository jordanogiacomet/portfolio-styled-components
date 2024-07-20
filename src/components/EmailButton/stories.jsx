import React from 'react';
import { EmailButton } from '.';

export default {
  title: 'EmailButton',
  component: EmailButton,
  argTypes: {
    type: { control: 'text' },
    children: { control: 'text' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

const Template = (args) => <EmailButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: 'submit',
  children: 'Send Message',
};
