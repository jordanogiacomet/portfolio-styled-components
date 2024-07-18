import P from 'prop-types';
import * as Styled from './styles';

export const Link = ({ href, children, className, target='_blank' }) => {
  return (
    <Styled.Container href={href} className={className} target={target}>
      {children}
    </Styled.Container>
  );
};

Link.propTypes = {
  href: P.string.isRequired,
  children: P.node.isRequired,
  className: P.string,
  target: P.string
};