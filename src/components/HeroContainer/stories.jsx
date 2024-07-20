import React from 'react';
import { HeroContainer } from '.';
import { Col } from './styles';

export default {
  title: 'HeroContainer',
  component: HeroContainer,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

const Template = (args) => (
  <HeroContainer {...args}>
    <Col span={6}>Content Left</Col>
    <Col span={6}>Content Right</Col>
  </HeroContainer>
);

export const Default = Template.bind({});
Default.args = {};
