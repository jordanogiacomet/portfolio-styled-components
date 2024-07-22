import styled from 'styled-components';

export const Container = styled.div`
    display: block;
    z-index: 10;
    @media ${({ theme }) => theme.media.md} {
      display: none;
    };
`;
