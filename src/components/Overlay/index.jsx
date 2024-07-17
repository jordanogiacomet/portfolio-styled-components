import P from 'prop-types';
import * as Styled from './styles';

export const Overlay = ({ children, type, className }) => {
  return (
    <Styled.Container type={type} className={className}>
      {children}
    </Styled.Container>
  );
};

Overlay.propTypes = {
  children: P.node.isRequired,
  type: P.string.isRequired,
  className: P.string,
};