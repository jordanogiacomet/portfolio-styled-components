import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  @media (min-width: 768px) {
    margin-top: 0;
  }
  text-align: left;
  display: flex;
  flex-direction: column;
  order: 1;
  
  height: auto;
`;
