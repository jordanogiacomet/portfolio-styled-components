import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 9999px;
  background-color: #181818;
  width: 250px;
  height: 250px;
  position: relative;

  @media ${({ theme }) => theme.media.lg} {
    width: 400px;
    height: 400px;
  }

  img {
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 9999px;
  }
`;