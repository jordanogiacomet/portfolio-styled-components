import P from 'prop-types';
import * as Styled from './styles';
import { useColorMode } from '../../contexts/ColorModeContext';

export const Link = ({ href, children, className, target = '_blank', ariaLabel }) => {
  const { colorMode } = useColorMode();
  return (
    <Styled.Container 
      href={href} 
      className={`${className} ${colorMode}`} 
      target={target} 
      aria-label={ariaLabel}
    >
      {children}
    </Styled.Container>
  );
};

Link.propTypes = {
  href: P.string.isRequired,
  children: P.node.isRequired,
  className: P.string,
  target: P.string,
  ariaLabel: P.string.isRequired,
};
