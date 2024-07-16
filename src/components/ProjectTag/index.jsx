// ProjectTag.jsx
import React from 'react';
import P from 'prop-types';
import * as Styled from './styles';

const ProjectTag = ({ name, onClick, isSelected }) => {
  return (
    <Styled.Container onClick={() => onClick(name)} isSelected={isSelected}>
      {name}
    </Styled.Container>
  );
};

ProjectTag.propTypes = {
  name: P.string.isRequired,
  onClick: P.func.isRequired,
  isSelected: P.bool.isRequired,
};

export default ProjectTag;