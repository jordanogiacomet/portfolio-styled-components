import React from 'react';
import { AboutButton } from '.';
import { renderTheme } from '../../styles/render-theme';

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

const Template = (args) => renderTheme(<AboutButton {...args} />);

export const Default = Template.bind({});
Default.args = {
  children: 'Skills',
  active: false,
};

export const Active = Template.bind({});
Active.args = {
  children: 'Skills',
  active: true,
};