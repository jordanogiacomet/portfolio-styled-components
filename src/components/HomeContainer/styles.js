import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-top: 8rem;
  margin-left: auto;
  margin-right: auto;
  padding: 1rem 3rem;

  @media ${({ theme }) => theme.media.sm} { 
    max-width: ${({ theme }) => theme.container.maxWidth.sm};
  };

  @media ${({ theme }) => theme.media.md} { 
    max-width: ${({ theme }) => theme.container.maxWidth.md};
  };

  @media ${({ theme }) => theme.media.lg} { 
    max-width: ${({ theme }) => theme.container.maxWidth.lg};
  };

  @media ${({ theme }) => theme.media.xl} { 
    max-width: ${({ theme }) => theme.container.maxWidth.xl};
  };

  @media ${({ theme }) => theme.media.xxl} { 
    max-width: ${({ theme }) => theme.container.maxWidth.xxl};
  };
`;
