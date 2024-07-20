import React from 'react';
import ScrollToTopButton from '.';

export default {
  title: 'ScrollToTopButton',
  component: ScrollToTopButton,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

const Template = (args) => <ScrollToTopButton {...args} />;

export const Default = Template.bind({});
Default.args = {};
