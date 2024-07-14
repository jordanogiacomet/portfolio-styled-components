import P from 'prop-types';
import * as Styled from './styles';

export const OverlayMenu = ({ children }) => {
  return (
    <Styled.Container>
      {children}
    </Styled.Container>
  );
};

OverlayMenu.propTypes = {
  children: P.node.isRequired,
};