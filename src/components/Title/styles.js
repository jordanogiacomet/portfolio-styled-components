import styled from 'styled-components';

export const Container = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 1rem;
  font-weight: 800;

  font-size: ${({ theme }) => theme.font.sizes.medium};
  
  @media ${({ theme }) => theme.media.sm} {
    font-size: ${({ theme }) => theme.font.sizes.big};
  };

  @media ${({ theme }) => theme.media.lg} {
    font-size: ${({ theme }) => theme.font.sizes.xbig};
  };
`;