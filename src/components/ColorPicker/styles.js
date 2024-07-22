import styled, { css } from 'styled-components';

export const PickerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  
  @media ${({ theme }) => theme.mediaMax.md} {
    margin: 0;
  };

  @media ${({ theme }) => theme.media.md} {
    align-items: flex-start;
  };
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
  };

  @media ${({ theme }) => theme.mediaMax.md} {
    flex-direction: column;
    align-items: center;
  };
`;

export const BottomRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  @media ${({ theme }) => theme.mediaMax.md} {
    flex-direction: column;
    align-items: center;
  };
`;

export const TitleDiv = styled.div`
  width: 100%;

  > h3 {
    text-align: center;
    margin-bottom: 20px;
  };
`;

export const GradientContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  gap: 50px;

  @media ${({ theme }) => theme.mediaMax.md} {
    flex-direction: column;
    align-items: center;
  };
`;

export const Title = styled.h3`
  ${({ color }) => css`
    color: ${color};
  `};
`;
