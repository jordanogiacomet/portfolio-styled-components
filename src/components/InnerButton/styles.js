import styled, { css } from 'styled-components';

const getInnerButtonStyles = ({ theme, type }) => {
  const buttonType = theme.button[type] || theme.button.default;
  return buttonType.innerBgColor ? css`
  background-color: ${buttonType.innerBgColor};
  border-radius: ${buttonType.borderRadius};
  padding: ${buttonType.innerPadding};


  @media (${theme.media.lteMedium}) {
      width: 100%; /* Largura 100% em telas menores */
    }
  ` : ''; 
};

export const Container = styled.span`
  display: block;
  ${getInnerButtonStyles};
`;