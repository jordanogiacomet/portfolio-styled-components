import styled from 'styled-components';

export const Container = styled.div`
  width: 300px; 
  height: 300px; 
  background: ${({ theme }) => theme.colors.heroWrapperBackground}
  border-radius: 0.5rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  transition: transform 0.2s ease-in-out;
  @media ${({ theme }) => theme.media.md} {
    &:hover {
    transform: scale(1.05);
    };
  };
  @media ${({ theme }) => theme.mediaMax.md} {
    width: 300px;
  };
`;

export const Heading = styled.h2`
  position: absolute;
  z-index: 2;
  transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;;
  top: 45%;
  width: 100%;
  line-break: auto;
  font-size: ${({ theme }) => theme.font.sizes.medium};
 
  @media ${({ theme }) => theme.mediaMax.md} {
    width: 100%;
    top: 75%;
  };
  @media ${({ theme }) => theme.mediaMax.sm} {
    font-size: ${({ theme }) => theme.font.sizes.lg};
  };
  @media ${({ theme }) => theme.media.md} {
    bottom: 1rem;
    &.hide {
    opacity: 0;
    visibility: hidden;
    };

  &.show {
    opacity: 1;
    visibility: visible;
    };
  };
`;
