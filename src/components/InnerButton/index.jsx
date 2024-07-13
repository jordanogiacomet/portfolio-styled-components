import P from 'prop-types';
import * as Styled from './styles';

export const InnerButton = ({ children, type="downloadCV" }) => {
  return (
    <Styled.Container type={type}>
      {children}
    </Styled.Container>
  );
};

InnerButton.propTypes = {
  children: P.node.isRequired,
  type: P.string,
};