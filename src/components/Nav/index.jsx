import P from 'prop-types';
import * as Styled from './styles';

export const Nav = ({ children, className }) => {
  return (
    <Styled.Container className={className}>
      {children}
    </Styled.Container>
  );
};

Nav.propTypes = {
  children: P.node.isRequired,
  className: P.string
};