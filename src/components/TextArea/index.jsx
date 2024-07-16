import P from 'prop-types';
import * as Styled from './styles';

export const TextArea = ({ name, id, className, placeholder, required }) => {
  return (
    <Styled.Container
      name={name}
      id={id}
      className={className}
      placeholder={placeholder}
      required={required}
    />
  );
};

TextArea.propTypes = {
  name: P.string.isRequired,
  id: P.string.isRequired,
  className: P.string,
  placeholder: P.string.isRequired,
  required: P.bool,
};