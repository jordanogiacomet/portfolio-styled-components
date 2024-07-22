import styled from 'styled-components';

export const Container = styled.div`
  display: ${({ open }) => (open ? 'block' : 'none')};
  width: auto;

  @media ${({ theme }) => theme.media.md} {
    display: flex;
    align-items: center;
  };

  ul {
    display: flex;
    flex-direction: column;
    padding: 1rem;

    @media ${({ theme }) => theme.media.md} {
      flex-direction: row;
      padding: 0;
      gap: 1rem;
    };

    li {
      list-style: none;
      margin: 0.5rem 0;

      @media ${({ theme }) => theme.media.md} {
        margin: 0;
      };
    };
  };
`;
