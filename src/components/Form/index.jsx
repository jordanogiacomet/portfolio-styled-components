import P from 'prop-types';
import * as Styled from './styles';

export const Form = ({ children }) => {
  return (
    <Styled.Container>
      {children}
    </Styled.Container>
  );
};

Form.propTypes = {
  children: P.node.isRequired,
};