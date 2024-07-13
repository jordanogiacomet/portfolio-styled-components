import P from 'prop-types';
import * as Styled from './styles';

export const Button = ({ children, type="default" }) => {
  return (
    <Styled.Container type={type}>
      {children}
    </Styled.Container>
  );
};

Button.propTypes = {
  children: P.node.isRequired,
  type: P.string,
};