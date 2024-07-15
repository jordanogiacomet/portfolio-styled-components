import React from 'react';
import { AboutButton } from '.';


export default {
  title: 'AboutButton',
  component: AboutButton,
  argTypes: {
    active: { control: 'boolean' },
    children: { control: 'text' },
    selectTab: { action: 'clicked' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

const Template = (args) => <AboutButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Button Text',
  active: false,
  selectTab: () => alert('Button clicked'),
};