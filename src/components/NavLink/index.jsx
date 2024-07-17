import P from 'prop-types';
import * as Styled from './styles';

export const NavLink = ({ children, href, target = "_self", onClick }) => {
  return (
    <Styled.Container href={href} target={target} onClick={onClick}>
      {children}
    </Styled.Container>
  );
};

NavLink.propTypes = {
  children: P.node.isRequired,
  href: P.string.isRequired,
  target: P.string,
  onClick: P.func.isRequired
};