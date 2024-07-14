import P from 'prop-types';
import * as Styled from './styles';

export const OverlayItem = ({ children }) => {
  return (
    <Styled.Container>
      {children}
    </Styled.Container>
  );
};

OverlayItem.propTypes = {
  children: P.node.isRequired,
};