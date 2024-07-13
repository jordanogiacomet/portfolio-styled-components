import React from 'react';
import { GradientText } from '.';

export default {
  title: 'GradientText',
  component: GradientText,
  args: {
    children: 'Texto com gradiente',
    from: '#a855f7', // Cor inicial padrão
    via: '#ec4899',  // Cor intermediária padrão
    to: '#f87171',   // Cor final padrão
  },
  argTypes: {
    children: { control: 'text' },
    from: { control: 'color' },
    via: { control: 'color' },
    to: { control: 'color' },
  },
};

export const Default = (args) => <GradientText {...args} />;
