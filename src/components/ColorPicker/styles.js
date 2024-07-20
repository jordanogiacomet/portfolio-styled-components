import styled, { css } from 'styled-components';

export const PickerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  
  @media (max-width: 768px) {
    margin: 0;
  } 

  @media (min-width: 768px) {
    align-items: flex-start;
  }
`;

export const TopRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  gap: 50px;
  margin-bottom: 50px;
  
  > div > h3 {
    margin-bottom: 20px;
    text-align: center;
  }

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const BottomRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const TitleDiv = styled.div`
  width: 100%;

  > h3 {
    text-align: center;
    margin-bottom: 20px;
  }
`;

export const GradientContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  gap: 50px;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Title = styled.h3`
  ${({ color }) => css`
    color: ${color};
  `}
`;
