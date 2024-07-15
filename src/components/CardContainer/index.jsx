import P from 'prop-types';
import * as Styled from './styles';

export const CardContainer = ({ children }) => {
  return (
    <Styled.Container>
      {children}
    </Styled.Container>
  );
};

CardContainer.propTypes = {
  children: P.node.isRequired,
};