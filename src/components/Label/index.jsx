import P from 'prop-types';
import * as Styled from './styles';

export const Label = ({ children, htmlFor }) => {
  return (
    <Styled.Container htmlFor={htmlFor}>
      {children}
    </Styled.Container>
  );
};

Label.propTypes = {
  children: P.node.isRequired,
  htmlFor: P.string.isRequired,
};