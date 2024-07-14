/* eslint-disable no-extra-boolean-cast */
import P from 'prop-types';
import * as Styled from './styles';
import { Heading } from '../Heading';


export const LogoLink = ({ text, srcImg = '', link }) => {
  return (
    <Heading size='small' uppercase colorDark={false}>
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