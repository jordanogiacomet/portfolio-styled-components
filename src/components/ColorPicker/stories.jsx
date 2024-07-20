// src/components/ColorPicker/ColorPicker.stories.jsx
import React from 'react';
import { ColorPicker } from '.';
import { ColorProvider } from '../../contexts/ColorCustomizationContext';
import { LanguageProvider } from '../../contexts/LanguageContext';

export default {
  title: 'ColorPicker',
  component: ColorPicker,
};

const Template = (args) => (
  <LanguageProvider>
    <ColorProvider>
      <ColorPicker {...args} />
    </ColorProvider>
  </LanguageProvider>
);

export const Default = Template.bind({});
Default.args = {};
