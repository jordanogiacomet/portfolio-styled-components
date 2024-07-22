import styled from 'styled-components';

export const ButtonDiv = styled.div`
  position: relative;
  @media ${({ theme }) => theme.mediaMax.md} {
    display: none;
  };
`;