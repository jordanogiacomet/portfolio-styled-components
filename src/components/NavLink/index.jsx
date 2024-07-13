import P from 'prop-types';
import * as Styled from './styles';

export const NavLink = ({ children, href, target="_self" }) => {
  return (
    <Styled.Container href={href} target={target}>
      {children}
    </Styled.Container>
  );
};

NavLink.propTypes = {
  children: P.node.isRequired,
  href: P.string.isRequired,
  target: P.string,
};