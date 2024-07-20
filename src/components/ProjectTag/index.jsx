// ProjectTag.jsx
import React from 'react';
import P from 'prop-types';
import * as Styled from './styles';
import { useColorMode } from '../../contexts/ColorModeContext';
import { useColorCustomization } from '../../contexts/ColorCustomizationContext';

const ProjectTag = ({ name, onClick, isSelected, children }) => {
  const { colorMode } = useColorMode();
  const { gradientColors } = useColorCustomization();
  return (
    <Styled.Container color={gradientColors.via} onClick={() => onClick(name)} isSelected={isSelected} className={colorMode}>
      {children}
    </Styled.Container>
  );
};

ProjectTag.propTypes = {
  name: P.string.isRequired,
  onClick: P.func.isRequired,
  isSelected: P.bool.isRequired,
  children: P.node.isRequired,
};

export default ProjectTag;