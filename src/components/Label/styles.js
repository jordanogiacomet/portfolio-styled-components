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
  font-size: ${({ theme }) => theme.font.sizes.small};
  font-weight: 600; /* font-medium */

`;