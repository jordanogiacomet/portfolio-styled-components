import React from 'react';
import { ColorModeToggleButton } from '.';
import { ColorModeProvider } from '../../contexts/ColorModeContext';

export default {
  title: 'ColorModeToggleButton',
  component: ColorModeToggleButton,
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
};

const Template = (args) => (
  <ColorModeProvider>
    <ColorModeToggleButton {...args} />
  </ColorModeProvider>
);

export const Default = Template.bind({});
Default.args = {};