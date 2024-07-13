import P from 'prop-types';
import * as Styled from './styles';

export const GradientText = ({ children, from, via, to }) => {
  return (
    <Styled.Container from={from} via={via} to={to}>
      {children}
    </Styled.Container>
  );
};

GradientText.propTypes = {
  children: P.node.isRequired,
  from: P.string,
  via: P.string,
  to: P.string,
};

