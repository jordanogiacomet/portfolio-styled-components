import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 4px;
  order: 2;
  > img {
  display: block;
  max-width: 100%;
  height: auto;
  border-radius: 10px; /* Ajuste o raio da borda conforme necessário */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1);
  }
  
  @media (min-width: 768px) {
  margin-top: 0;
  }
`;
