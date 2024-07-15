import P from 'prop-types';
import * as Styled from './styles';

export const List = ({ children }) => {
  return (
    <Styled.Container>
      {children}
    </Styled.Container>
  );
};

List.propTypes = {
  children: P.node.isRequired,
};