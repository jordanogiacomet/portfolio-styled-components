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
  name: P.string.isRequired, // 'name' should be a required string
  onClick: P.func.isRequired, // 'onClick' should be a required function
  isSelected: P.bool.isRequired, // 'isSelected' should be a required boolean
};

export default ProjectTag;