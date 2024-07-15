import P from 'prop-types';
import * as Styled from './styles';

export const Link = ({ href, children }) => {
  return (
    <Styled.Container href={href}>
      {children}
    </Styled.Container>
  );
};

Link.propTypes = {
  href: P.string.isRequired,
  children: P.node.isRequired,
};