import P from 'prop-types';
import * as Styled from './styles';

export const TagContainer = ({ children }) => {
  return (
    <Styled.Container>
      {children}
    </Styled.Container>
  );
};

TagContainer.propTypes = {
  children: P.node.isRequired,
};