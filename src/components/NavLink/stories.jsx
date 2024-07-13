import React from 'react';
import { NavLink } from '.';

export default {
  title: 'NavLink',
  component: NavLink,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

const Template = (args) => <NavLink {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "About",
};