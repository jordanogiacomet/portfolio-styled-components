import P from 'prop-types';
import * as Styled from './styles';

export const AnimatedText = () => {
  return (
    <Styled.Container
    sequence={[
      'Jordano',
      1000,
      'Web Developer',
      1000,
      'Backend Developer',
      1000,
      'Fullstack Developer',
      1000,
    ]}
    wrapper="span"
    speed={50}
    repeat={Infinity}
  />
  );
};

AnimatedText.propTypes = {

};