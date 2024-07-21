import React from 'react';
import { GradientText } from '.';
import { ColorProvider } from '../../contexts/ColorCustomizationContext';

export default {
  title: 'GradientText',
  component: GradientText,
  decorators: [
    (Story) => (
      <ColorProvider>
        <Story />
      </ColorProvider>
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

const Template = (args) => <GradientText {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Texto com gradiente',
};
