import React from 'react';
import { ColorCustomizationSection } from '.';

export default {
  title: 'ColorCustomizationSection',
  component: ColorCustomizationSection,
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
};

const Template = (args) => <ColorCustomizationSection {...args} />;

export const Default = Template.bind({});
Default.args = {};
