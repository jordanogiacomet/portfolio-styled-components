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
  transition: transform 0.2s ease-in-out;
  @media(min-width: 768px){
    &:hover {
    transform: scale(1.05);
  }
  }
  @media(max-width: 768px){
    width: 100%;
  }
`;

export const Heading = styled.h2`
  position: absolute;
  z-index: 2;
  transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;
  color: white;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;;
  top: 45%;
  width: 100%;
  line-break: auto;
  font-size: 2.5rem;
 
  @media(max-width: 768px){
    width: 100%;
    top: 75%;
  }
  @media(max-width: 640px){
    font-size: 1.8rem;
  }
  @media(min-width: 768px) {
    bottom: 1rem;
  }
  &.hide {
    opacity: 0;
    visibility: hidden;
  }

  &.show {
    opacity: 1;
    visibility: visible;
  }
`;
