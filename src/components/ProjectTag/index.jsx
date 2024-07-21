import React from 'react';
import P from 'prop-types';
import * as Styled from './styles';
import { useColorMode } from '../../contexts/ColorModeContext';
import { useColorCustomization } from '../../contexts/ColorCustomizationContext';

const ProjectTag = ({ name, onClick, isSelected }) => {
  const { colorMode } = useColorMode();
  const { gradientColors } = useColorCustomization();
  return (
    <Styled.Container color={gradientColors.via} onClick={() => onClick(name)} isSelected={isSelected} className={colorMode}>
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
