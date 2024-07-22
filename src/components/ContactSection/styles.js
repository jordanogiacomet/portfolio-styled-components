import styled from 'styled-components';

export const Container = styled.div`
  .styles-module_whatsappButton__tVits {
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 10rem;
    right: 4rem;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.backgroundWhatsapp};
    border-radius: 50%;
    user-select: none;
    box-shadow: 0px 4px 10px 0px rgb(0 0 0 / 15%);
    z-index: 9998;

    @media ${({ theme }) => theme.mediaMax.sm} {
      width: 40px;
      height: 40px;
      bottom: 3rem;
      right: 3rem;
    };
  };

  .floating-whatsapp-chatbox {
    > header {
      > div > span {
        font-size: ${({ theme }) => theme.font.sizes.xsmall}
      };
    };
  };
`;
