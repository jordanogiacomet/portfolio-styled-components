// src/components/AboutSection/index.stories.js
import React from 'react';
import { AboutSection } from '.';
import { ColorProvider } from '../../contexts/ColorCustomizationContext';
import { LanguageProvider } from '../../contexts/LanguageContext';
import { ColorModeProvider } from '../../contexts/ColorModeContext';

export default {
  title: 'AboutSection',
  component: AboutSection,
  decorators: [
    (Story) => (
      <ColorModeProvider>
        <ColorProvider>
          <LanguageProvider>
            <Story />
          </LanguageProvider>
        </ColorProvider>
      </ColorModeProvider>
    ),
  ],
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

const Template = (args) => <AboutSection {...args} />;

export const Default = Template.bind({});
Default.args = {};
