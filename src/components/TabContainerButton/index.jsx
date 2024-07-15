import P from 'prop-types';
import * as Styled from './styles';

export const TabContainerButton = ({ children }) => {
  return (
    <Styled.Container>
      {children}
    </Styled.Container>
  );
};

TabContainerButton.propTypes = {
  children: P.node.isRequired,
};