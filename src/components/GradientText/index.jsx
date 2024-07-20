import P from 'prop-types';
import * as Styled from './styles';
import { useColorCustomization } from '../../contexts/ColorCustomizationContext';

export const GradientText = ({ children }) => {
  const { gradientColors } = useColorCustomization();

  return (
    <Styled.Container 
      from={gradientColors.from} 
      via={gradientColors.via} 
      to={gradientColors.to}
    >
      {children}
    </Styled.Container>
  );
};

GradientText.propTypes = {
  children: P.node.isRequired,
};
