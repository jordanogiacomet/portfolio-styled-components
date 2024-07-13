import styled, { css } from 'styled-components';

const getButtonStyles = ({ theme, type }) => {
  const buttonType = theme.button[type] || theme.button.default;
  return css`
    padding: ${buttonType.padding};
    border-radius: ${buttonType.borderRadius};
    color: ${buttonType.textColor};
    background: ${buttonType.background};
    cursor: pointer; 
    &:hover {
      background-color: ${buttonType.hoverBgColor};
    };
  `;
};

export const Container = styled.button`
  ${getButtonStyles};
`; 