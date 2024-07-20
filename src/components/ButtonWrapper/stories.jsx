import React from 'react';
import { ButtonWrapper } from '.';
import { HeroButton } from '../HeroButton';
import { InnerButton } from '../InnerButton';

export default {
  title: 'ButtonWrapper',
  component: ButtonWrapper,
};

export const Default = () => (
  <ButtonWrapper>
    <HeroButton type="hireMe">Hire Me</HeroButton>
    <HeroButton type="downloadCV">
      <InnerButton>Download CV</InnerButton>
    </HeroButton>
  </ButtonWrapper>
);
