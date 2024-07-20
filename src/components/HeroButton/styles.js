import styled, { css } from 'styled-components';

const getButtonStyles = ({ theme, type }) => {
  const buttonType = theme.button[type] || theme.button.default;
  return css`
    padding: ${buttonType.padding};
    border-radius: ${buttonType.borderRadius};
    color: ${buttonType.textColor};
    font-weight: bold;
    cursor: pointer; 
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 150px;
    transition: scale ease-in-out 0.2s;
    border: transparent;
    &:hover {
      transition: scale ease-in-out 0.2s;
      scale: calc(1.03);
    };
    @media (${theme.media.lteMedium}) {
      width: 100%;
    }
  `;
};

export const Container = styled.button`
  ${getButtonStyles};
  ${({ from, via, to}) => css`
    background: linear-gradient(to bottom right, ${from}, ${via}, ${to});
  `}
`; 
