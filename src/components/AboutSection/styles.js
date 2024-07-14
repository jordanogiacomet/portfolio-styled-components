import styled from 'styled-components';

export const Container = styled.section`
  color: white;
  padding: 8px 4px;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
    padding: 16px 16px;
  }
  @media (min-width: 1280px) {
    gap: 16px;
    padding: 16px;
  };
`;
