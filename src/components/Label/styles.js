import styled, {css} from 'styled-components';

export const Container = styled.label`
  ${({color}) => css`
    color: ${color};
    &.light{
    color: ${color};
  }
  `}
  
  display: block;
  margin-bottom: 1rem;
  font-size: 1.5rem; /* text-sm */
  font-weight: 600; /* font-medium */

`;