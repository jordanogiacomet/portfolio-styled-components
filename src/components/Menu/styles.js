import styled from 'styled-components';

export const Container = styled.div`
  display: ${({ open }) => (open ? 'block' : 'none')};
  width: auto;
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }

  ul {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    @media (min-width: 768px) {
      flex-direction: row;
      padding: 0;
      gap: 1rem;
    }

    li {
      list-style: none;
      margin: 0.5rem 0;
      @media (min-width: 768px) {
        margin: 0;
      }
    }
  }
`;
