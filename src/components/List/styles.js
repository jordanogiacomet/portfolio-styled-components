import styled from 'styled-components';

export const Container = styled.ul`
    list-style-type: disc;
    padding-left: 0.5rem;
    > li {
      margin-top: 8px;
    }
    @media (max-width: 640px) {
      font-size: 1.5rem;
    }
    &.light {
      > li {
        color: black;
        font-weight: 500;
      }
    }
`;
