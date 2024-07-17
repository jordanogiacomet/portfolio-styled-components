import styled from 'styled-components';

export const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(1, 1fr);

  @media ${({ theme }) => theme.media.lg} {
    grid-template-columns: repeat(12, 1fr);
    align-items: center;
    justify-content: space-between;
    gap: 5rem;
  }
`;

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

  &.form-element{
    @media(max-width: 1024px) {
      order: 2;
    };
  }

  &.text-element{
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

export const FormDiv = styled.div`
  margin-bottom: 2rem;
`;