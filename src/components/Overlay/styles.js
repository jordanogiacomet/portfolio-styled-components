import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 9;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30%;

  @media (min-width: 768px) {
    display: none;
  }
`;
