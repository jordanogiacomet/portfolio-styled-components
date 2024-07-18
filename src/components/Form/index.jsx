import P from 'prop-types';
import * as Styled from './styles';

export const Form = ({ children, onSubmit }) => {
  return (
    <Styled.Container onSubmit={onSubmit}>
      {children}
    </Styled.Container>
  );
};

Form.propTypes = {
  children: P.node.isRequired,
  onSubmit: P.func.isRequired,
};