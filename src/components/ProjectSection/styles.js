import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 30px;
  margin-bottom: 240px;
  text-align: left;
  display: flex;
  flex-direction: column;
  height: auto;
  @media ${({ theme }) => theme.media.md} {
    margin-top: 0;
  };
  @media ${({ theme }) => theme.mediaMax.lg} {
     margin-bottom: 100px;
    };
`;