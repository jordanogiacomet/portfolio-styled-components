import P from 'prop-types';
import * as Styled from './styles';

export const HomeContainer = ({ children }) => {
  return (
    <Styled.Container>
      {children}
    </Styled.Container>
  );
};

HomeContainer.propTypes = {
  children: P.node.isRequired,
};