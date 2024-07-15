import P from 'prop-types';
import * as Styled from './styles';

export const ProjectOverlay = ({ children }) => {
  return (
    <Styled.Container>
      {children}
    </Styled.Container>
  );
};

ProjectOverlay.propTypes = {
  children: P.node.isRequired,
};