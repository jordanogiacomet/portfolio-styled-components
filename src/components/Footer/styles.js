import styled from 'styled-components';

export const Container = styled.footer`
  border-top: 1px solid #33353F;
  border-left: transparent;
  border-right: transparent;
  z-index: 10;
  color: white;
  width: 100%;
  background-color: #18191E;
`;

export const Wrapper = styled.div`
  padding: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const Text = styled.p`
  color: #9CA2A9;
  font-size: 1.5rem;
`;