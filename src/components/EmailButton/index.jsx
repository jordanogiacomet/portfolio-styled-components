import P from 'prop-types';
import * as Styled from './styles';
import { useColorCustomization } from '../../contexts/ColorCustomizationContext';

export const EmailButton = ({ type, children }) => {
  const { gradientColors } = useColorCustomization();
  return (
    <Styled.Container 
    from={gradientColors.from}
    via={gradientColors.via}
    to={gradientColors.to}
    type={type}>
      {children}
    </Styled.Container>
  );
};

EmailButton.propTypes = {
  type: P.string.isRequired,
  children: P.node.isRequired,
};