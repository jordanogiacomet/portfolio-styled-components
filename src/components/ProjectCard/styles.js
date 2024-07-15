import styled from 'styled-components';

export const Container = styled.div`
  width: 300px; // Defina a largura fixa para todos os cards
  height: 300px; // Defina a altura fixa para todos os cards
  background: #181818;
  border-radius: 0.5rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  @media(max-width: 768px){
    width: 100%;
  }
`;
