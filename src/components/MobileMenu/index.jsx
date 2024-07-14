import P from 'prop-types';
import * as Styled from './styles';

export const MobileMenu = ({ children }) => {
  return (
    <Styled.Container>
      {children}
    </Styled.Container>
  );
};

MobileMenu.propTypes = {
  children: P.node.isRequired,
};