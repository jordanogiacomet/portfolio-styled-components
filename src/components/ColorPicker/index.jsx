import React from 'react';
import { SketchPicker } from 'react-color';
import { useColorCustomization } from '../../contexts/ColorCustomizationContext';
import { PickerContainer, TopRow, BottomRow, TitleDiv, GradientContainer, Title } from './styles';
import { useLanguage } from '../../contexts/LanguageContext';

export const ColorPicker = () => {
  const { primaryColor, setPrimaryColor, gradientColors, setGradientColors } = useColorCustomization();
  const { language } = useLanguage();

  const handlePrimaryChangeComplete = (color) => {
    setPrimaryColor(color.hex);
  };


  const handleGradientChangeComplete = (color, key) => {
    setGradientColors((prevColors) => ({
      ...prevColors,
      [key]: color.hex,
    }));
  };

  return (
    <PickerContainer>
      <TopRow>
        <div>
          <Title color={primaryColor}>
            {language === 'en' ? 'Cor do Texto' : 'Text Color'}
          </Title>
          <SketchPicker color={primaryColor} onChangeComplete={handlePrimaryChangeComplete} />
        </div>
      </TopRow>
      <TitleDiv>
        <Title color={primaryColor}>{language === 'en' ? 'Cores do Gradiente' : 'Gradient Colors'}</Title>
        <BottomRow>
          <GradientContainer>
            <div>
              <SketchPicker color={gradientColors.from} onChangeComplete={(color) => handleGradientChangeComplete(color, 'from')} />
            </div>
            <div>
              <SketchPicker color={gradientColors.via} onChangeComplete={(color) => handleGradientChangeComplete(color, 'via')} />
            </div>
            <div>
              <SketchPicker color={gradientColors.to} onChangeComplete={(color) => handleGradientChangeComplete(color, 'to')} />
            </div>
          </GradientContainer>
        </BottomRow>
      </TitleDiv>
    </PickerContainer>
  );
};
