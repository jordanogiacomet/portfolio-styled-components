import React from 'react';
import { MenuButton } from './MenuButton';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

export default {
  title: 'MenuButton',
  component: MenuButton,
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

const Template = (args) => <MenuButton {...args} />;

export const Hamburger = Template.bind({});
Hamburger.args = {
  children: <Bars3Icon />,
};

export const Close = Template.bind({});
Close.args = {
  children: <XMarkIcon />,
};