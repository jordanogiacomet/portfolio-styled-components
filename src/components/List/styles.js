import styled from 'styled-components';

export const Container = styled.ul`
    list-style-type: disc;
    padding-left: 0.5rem;
    > li {
      margin-top: 8px;
    };
    @media ${({ theme }) => theme.mediaMax.sm} {
      font-size: ${({ theme }) => theme.font.sizes.small};
    };
    &.light {
      > li {
        color: ${({ theme }) => theme.colors.primaryColor};
        font-weight: 500;
      };
    };
`;
