import styled from 'styled-components';

export const Col = styled.div`
  grid-column: span 1;
  @media ${({ theme }) => theme.media.sm} {
    grid-column: ${({ span }) => `span ${span}`};
  };

  &.self-center {
    place-self: center;
  };

  &.text-center {
    text-align: center;
  };

  &.form-element {
    @media(max-width: 1024px) {
      order: 2;
    };
  }

  &.text-element {
    text-align: right !important;
    margin-left: 30px;
    @media(max-width: 1024px) {
      order: 1;
      margin-left: 0px;
      margin-bottom: 40px;
      text-align: left !important;
    };
  }

  @media ${({ theme }) => theme.media.sm} {
    text-align: left;
  };

  &.mt-4 {
    margin-top: 5rem;

    @media ${({ theme }) => theme.media.lg} {
      margin-top: 0;
    }
  };
`;
