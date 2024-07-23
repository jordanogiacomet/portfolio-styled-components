// src/components/AboutButton/index.stories.js
import React from 'react';
import { AboutButton } from '.';
import { ColorProvider } from '../../contexts/ColorCustomizationContext';
import { LanguageProvider } from '../../contexts/LanguageContext';
import { ColorModeProvider } from '../../contexts/ColorModeContext';

export default {
  title: 'AboutButton',
  component: AboutButton,
  argTypes: {
    active: { control: 'boolean' },
    children: { control: 'text' },
    selectTab: { action: 'clicked' },
    primaryColor: { control: 'color' },
    gradientFrom: { control: 'color' },
    gradientVia: { control: 'color' },
    gradientTo: { control: 'color' },
    backgroundMode: {
      control: {
        type: 'inline-radio',
        options: ['dark', 'light'],
      },
      defaultValue: 'dark',
    },
  },
  decorators: [
    (Story, context) => {
      const backgroundMode = context.args.backgroundMode;
      return (
        <ColorModeProvider>
          <ColorProvider>
            <LanguageProvider>
              <div style={{ background: backgroundMode === 'dark' ? '#000000' : '#FFFFFF', padding: '20px' }}>
                <Story />
              </div>
            </LanguageProvider>
          </ColorProvider>
        </ColorModeProvider>
      );
    },
  ],
  parameters: {
    backgrounds: {
      disable: true, // Desabilita o seletor de fundo padrão do Storybook
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
  backgroundMode: 'dark',
};


