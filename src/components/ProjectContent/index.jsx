import P from 'prop-types';
import * as Styled from './styles';

export const ProjectContent = ({ children }) => {
  return (
    <Styled.Container>
      {children}
    </Styled.Container>
  );
};

ProjectContent.propTypes = {
  children: P.node.isRequired,
};