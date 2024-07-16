import P from 'prop-types';
import * as Styled from './styles';

export const Input = ({ name, type, id, required, placeholder }) => {
  return (
    <Styled.Container
      name={name}
      type={type}
      id={id}
      required={required}
      placeholder={placeholder}
    />
  );
};

Input.propTypes = {
  name: P.string.isRequired,
  type: P.string.isRequired,
  id: P.string.isRequired,
  required: P.bool,
  placeholder: P.string.isRequired,
};