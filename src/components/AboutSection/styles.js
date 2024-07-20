import styled from 'styled-components';

export const Container = styled.section`
  padding: 50px 0;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    align-items: center;
    margin-top: 80px;
  }

  @media (min-width: 1280px) {
    gap: 50px;
  }
`;

