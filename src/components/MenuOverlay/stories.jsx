import React from 'react';
import { MenuOverlay } from '.';

const navLinks = [
  {
    title: 'About',
    path: '#about',
  },
  {
    title: 'Projects',
    path: '#projects',
  },
  {
    title: 'Contact',
    path: '#contact',
  },
];

export default {
  title: 'MenuOverlay',
  component: MenuOverlay,
  argTypes: {
    links: { control: 'object' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

const Template = (args) => <MenuOverlay {...args} />;

export const Default = Template.bind({});
Default.args = {
  links: navLinks,
};