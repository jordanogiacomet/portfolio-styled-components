import styled, {css} from 'styled-components';

export const Title = styled.h3`
  ${({ color }) => css`
  color: ${color}
  `}
`;
