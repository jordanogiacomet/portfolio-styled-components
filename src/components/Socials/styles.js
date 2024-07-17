import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: right;

  @media(max-width: 1024px) {
     justify-content: left;
    };
`;
