import styled, { css } from 'styled-components';

const getInnerButtonStyles = ({ theme, type }) => {
  const buttonType = theme.button[type] || theme.button.default;
  return buttonType.innerBgColor ? css`
  background-color: ${buttonType.innerBgColor};
  border-radius: ${buttonType.borderRadius};
  padding: ${buttonType.innerPadding};
  &:hover {
    background-color: ${buttonType.hoverBgColor}
  };
  ` : ''; 
};

export const Container = styled.span`
  display: block;
  ${getInnerButtonStyles};
`;