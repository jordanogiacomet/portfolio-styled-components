import styled from 'styled-components';

export const Container = styled.footer`
  border-top: 1px solid #33353F;
  border-left: transparent;
  border-right: transparent;
  z-index: 10;
  color: white;
  width: 100%;
  background-color: #18191E;

  &.light {
    background-color: #1E3A8A;
  }
`;

export const Wrapper = styled.div`
  padding: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const Text = styled.p`
  text-align: center;
  margin-top: 2rem;
  color: #ADB7BE;

  &.light {
    color: white;
  }
`;

export const Logo = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
`;
