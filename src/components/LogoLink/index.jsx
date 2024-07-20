/* eslint-disable no-extra-boolean-cast */
import P from 'prop-types';
import * as Styled from './styles';
import { Heading } from '../Heading';
import { useColorMode } from '../../contexts/ColorModeContext';

export const LogoLink = ({ text, srcImg = '', link }) => {
  const { colorMode } = useColorMode();
  return (
    <Heading size="small" uppercase colorDark={colorMode === 'light' ? false : true}>
      <Styled.Container href={link}>
        {!!srcImg ? <img src={srcImg} alt={text} /> : <span>{text}</span>}
      </Styled.Container>
    </Heading>
  );
};

LogoLink.propTypes = {
  text: P.node.isRequired,
  srcImg: P.string,
  link: P.string.isRequired,
};
