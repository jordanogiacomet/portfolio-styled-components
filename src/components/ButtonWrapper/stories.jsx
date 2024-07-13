import React from 'react';
import { ButtonWrapper } from '.';
import { Button } from '../Button';
import { InnerButton } from '../InnerButton';

export default {
  title: 'ButtonWrapper',
  component: ButtonWrapper,
};

export const Default = () => (
  <ButtonWrapper>
    <Button type="hireMe">Hire Me</Button>
    <Button type="downloadCV"><InnerButton>Download CV</InnerButton></Button>
  </ButtonWrapper>
);