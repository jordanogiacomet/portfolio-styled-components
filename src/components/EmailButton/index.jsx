import P from 'prop-types';
import * as Styled from './styles';

export const EmailButton = ({ type, children }) => {
  return (
    <Styled.Container type={type}>
      {children}
    </Styled.Container>
  );
};

EmailButton.propTypes = {
  type: P.string.isRequired,
  children: P.node.isRequired,
};