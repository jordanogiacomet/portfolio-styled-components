import styled from 'styled-components';

export const Container = styled.h1`
  color: white;
  margin-bottom: 1rem;
  font-weight: 800;

  font-size: 2.5rem; /* text-4xl */
  
  @media ${({ theme }) => theme.media.sm} {
    font-size: 3rem; /* text-5xl */
  };

  @media ${({ theme }) => theme.media.lg} {
    font-size: 4rem; /* text-6xl */
  };
`;