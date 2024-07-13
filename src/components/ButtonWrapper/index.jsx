import P from 'prop-types';
import * as Styled from './styles';

export const ButtonWrapper = ({ children }) => {
  return (
    <Styled.Container>
      {children}
    </Styled.Container>
  );
};

ButtonWrapper.propTypes = {
  children: P.node.isRequired,
};