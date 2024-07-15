import React from 'react';
import { TabContainerButton } from '.';
import { AboutButton } from '../AboutButton';

export default {
  title: 'TabContainerButton',
  component: TabContainerButton,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

const Template = (args) => (
  <TabContainerButton {...args}>
    <AboutButton selectTab={() => {}} active={false}>Skills</AboutButton>
    <AboutButton selectTab={() => {}} active={false}>Education</AboutButton>
    <AboutButton selectTab={() => {}} active={false}>Certifications</AboutButton>
  </TabContainerButton>
);

export const Default = Template.bind({});
Default.args = {};