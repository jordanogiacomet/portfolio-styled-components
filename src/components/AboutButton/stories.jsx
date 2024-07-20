import React from 'react';
import { AboutButton } from './AboutButton';

export default {
  title: 'Components/AboutButton',
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

export const Active = Template.bind({});
Active.args = {
  children: 'Active Button',
  active: true,
  selectTab: () => alert('Button clicked'),
};
