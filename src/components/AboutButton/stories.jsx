// src/components/AboutButton/index.stories.js
import React from 'react';
import { AboutButton } from '.';
import { ColorProvider } from '../../contexts/ColorCustomizationContext';
import { LanguageProvider } from '../../contexts/LanguageContext';
import { ColorModeProvider } from '../../contexts/ColorModeContext';

export default {
  title: 'Components/AboutButton',
  component: AboutButton,
  argTypes: {
    active: { control: 'boolean' },
    children: { control: 'text' },
    selectTab: { action: 'clicked' },
    primaryColor: { control: 'color' },
    gradientFrom: { control: 'color' },
    gradientVia: { control: 'color' },
    gradientTo: { control: 'color' },
  },
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
      values: [
        {
          name: 'light',
          value: '#FFFFFF',
        },
        {
          name: 'dark',
          value: '#000000',
        },
      ],
    },
  },
};

const Template = (args) => <AboutButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Button Text',
  active: false,
  selectTab: () => alert('Button clicked'),
  primaryColor: '#1E90FF',
  gradientFrom: '#1E90FF',
  gradientVia: '#4169E1',
  gradientTo: '#00008B',
};

export const Active = Template.bind({});
Active.args = {
  children: 'Active Button',
  active: true,
  selectTab: () => alert('Button clicked'),
  primaryColor: '#1E90FF',
  gradientFrom: '#1E90FF',
  gradientVia: '#4169E1',
  gradientTo: '#00008B',
};
