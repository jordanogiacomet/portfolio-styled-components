import P from 'prop-types';
import * as Styled from './styles';

export const TabContent = ({ children }) => {
  return (
    <Styled.Container>
      {children}
    </Styled.Container>
  );
};

TabContent.propTypes = {
  children: P.node.isRequired,
};