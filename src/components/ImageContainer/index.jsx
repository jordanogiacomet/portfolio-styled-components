import P from 'prop-types';
import * as Styled from './styles';

export const ImageContainer = ({ children, imgUrl }) => {
  return (
    <Styled.Container imgUrl={imgUrl}>
      {children}
    </Styled.Container>
  );
};

ImageContainer.propTypes = {
  children: P.node.isRequired,
  imgUrl: P.string.isRequired,
};