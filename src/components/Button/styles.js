import styled, { css } from 'styled-components';

const getButtonStyles = ({ theme, type }) => {
  const buttonType = theme.button[type] || theme.button.default;
  return css`
    padding: ${buttonType.padding};
    border-radius: ${buttonType.borderRadius};
    color: ${buttonType.textColor};
    background: ${buttonType.background};
    cursor: pointer; 
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 150px; /* Ajuste a largura mínima conforme necessário */
    &:hover {
      background-color: ${buttonType.hoverBgColor};
    };

    @media (${theme.media.lteMedium}) {
      width: 100%; /* Largura 100% em telas menores */
    }
  `;
};

export const Container = styled.button`
  ${getButtonStyles};
`; 