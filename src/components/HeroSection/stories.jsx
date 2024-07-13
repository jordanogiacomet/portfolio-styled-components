import React from 'react';
import { HeroSection } from '.';

export default {
  title: 'HeroSection',
  component: HeroSection,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const Default = () => (
  <HeroSection />
);