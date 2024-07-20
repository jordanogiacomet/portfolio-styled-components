import P from 'prop-types';
import * as Styled from './styles';
import { useColorMode } from '../../contexts/ColorModeContext';
import { useColorCustomization } from '../../contexts/ColorCustomizationContext';

export const HeroButton = ({ children, type = "default", ...props }) => {
  const { colorMode } = useColorMode();
  const { gradientColors } = useColorCustomization();
  return (
    <Styled.Container from={gradientColors.from} via={gradientColors.via} to={gradientColors.to} type={type} {...props} onClick={props.onClick} className={colorMode}>
      {children}
    </Styled.Container>
  );
};

HeroButton.propTypes = {
  children: P.node.isRequired,
  type: P.string,
  onClick: P.func.isRequired,
};