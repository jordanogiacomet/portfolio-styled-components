import React from 'react';
import { ContactSection } from '.';
import { ColorProvider } from '../../contexts/ColorCustomizationContext';
import { ColorModeProvider } from '../../contexts/ColorModeContext';

export default {
  title: 'ContactSection',
  component: ContactSection,
};

const Template = (args) => (
  <ColorModeProvider>
    <ColorProvider>
      <ContactSection {...args} />
    </ColorProvider>
  </ColorModeProvider>
);

export const Default = Template.bind({});
Default.args = {};
