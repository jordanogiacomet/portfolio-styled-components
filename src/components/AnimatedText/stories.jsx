import React from 'react';
import { AnimatedText } from '.';


export default {
  title: 'AnimatedText',
  component: AnimatedText,
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
};

export const Default = () => (
  <AnimatedText />
);