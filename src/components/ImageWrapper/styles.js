import styled, { css } from 'styled-components';

const imageWrapperStyles = {
  'about-wrapper': css`
    margin-top: 4px;
    order: 2;
    > img {
      display: block;
      max-width: 100%;
      height: auto;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1);
    }
    @media ${({ theme }) => theme.media.md} {
      margin-top: 0;
    }
  `,
  'hero-wrapper': css`
    border-radius: 9999px;
    background-color: ${({ theme }) => theme.colors.heroWrapperBackground};
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
  `,
};

export const Container = styled.div`
  ${({ type }) => imageWrapperStyles[type] || ''};
`;
