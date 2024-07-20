import styled from 'styled-components';
import { TypeAnimation } from 'react-type-animation';

export const Container = styled(TypeAnimation)`
  display: inline-block;
  
  &.light{
    color: black;
  }
  &.dark{
    color: white;
  }
`;