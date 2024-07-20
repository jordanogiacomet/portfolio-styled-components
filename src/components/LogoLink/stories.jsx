import React from 'react';
import { LogoLink } from '.';

export default {
  title: 'LogoLink',
  component: LogoLink,
  argTypes: {
    text: { control: 'text' },
    srcImg: { control: 'text' },
    link: { control: 'text' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

const Template = (args) => <LogoLink {...args} />;

export const WithText = Template.bind({});
WithText.args = {
  text: 'LOGO',
  link: '/',
};

export const WithImage = Template.bind({});
WithImage.args = {
  text: 'LOGO',
  srcImg: '/images/hero-image.png',
  link: '/',
};
