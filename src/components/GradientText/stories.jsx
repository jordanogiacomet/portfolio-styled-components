import React from 'react';
import { GradientText } from '.';
import { ColorProvider } from '../../contexts/ColorCustomizationContext';

export default {
  title: 'GradientText',
  component: GradientText,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

const Template = (args) => (
  <ColorProvider>
    <GradientText {...args} />
  </ColorProvider>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Texto com gradiente',
};
