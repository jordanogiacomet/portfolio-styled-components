import React from 'react';
import { ImageWrapper } from '.';

export default {
  title: 'ImageWrapper',
  component: ImageWrapper,
};

const Template = (args) => <ImageWrapper {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <img src="/images/hero-image.png" alt="hero image" />,
};