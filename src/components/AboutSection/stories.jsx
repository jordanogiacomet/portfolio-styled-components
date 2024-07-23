// src/components/AboutSection/index.stories.js
import React from 'react';
import { AboutSection } from '.';
import { ColorProvider } from '../../contexts/ColorCustomizationContext';
import { LanguageProvider } from '../../contexts/LanguageContext';
import { ColorModeProvider } from '../../contexts/ColorModeContext';

// src/components/AboutSection/index.stories.js
export default {
  title: 'AboutSection',
  component: AboutSection,
  argTypes: {
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
              <div style={{ background: backgroundMode === 'dark' ? '#000000' : '#FFFFFF', padding: '20px', color: backgroundMode === 'dark' ? '#FFFFFF' : '#000000' }}>
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
      disable: true,
    },
  },
};

const Template = (args) => <AboutSection {...args} />;

export const Default = Template.bind({});
Default.args = {
  backgroundMode: 'dark',
};

