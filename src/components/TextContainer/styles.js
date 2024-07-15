import styled, { css } from 'styled-components';

const aboutStyles = css`
  margin-top: 30px;
  margin-bottom: 30px;
  @media (min-width: 768px) {
    margin-top: 0;
  }
  text-align: left;
  display: flex;
  flex-direction: column;
  order: 1;
  height: auto;
`;

const projectsStyles = css`
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  order: 2;
  height: auto;
`;

export const Container = styled.div`
  ${(props) => (props.type === 'about' ? aboutStyles : projectsStyles)}
`;
