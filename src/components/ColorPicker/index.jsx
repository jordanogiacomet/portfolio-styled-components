// src/components/ColorPicker/index.jsx
import React from 'react';
import { SketchPicker } from 'react-color';
import { useColorCustomization } from '../../contexts/ColorCustomizationContext';
import styled from 'styled-components';
import { Title } from './styles';
import { useLanguage } from '../../contexts/LanguageContext'

const PickerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  
  @media(max-width: 768px){
    margin: 0;
  } 

  @media (min-width: 768px) {
    align-items: flex-start;
  }
`;

const TopRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  gap: 50px;
  margin-bottom: 50px;
  > div > h3{
    margin-bottom: 20px;
    text-align: center;
  }

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
`;

const BottomRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
`;

const TitleDiv = styled.div`
  width: 100%;
  > h3 {
    text-align: center;
    margin-bottom: 20px;
  }
`;

const GradientContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  gap: 50px;


  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ColorPicker = () => {
  const { primaryColor, setPrimaryColor, secondaryColor, setSecondaryColor, gradientColors, setGradientColors } = useColorCustomization();
  const { language } = useLanguage();

  const handlePrimaryChangeComplete = (color) => {
    setPrimaryColor(color.hex);
  };

  const handleSecondaryChangeComplete = (color) => {
    setSecondaryColor(color.hex);
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
        <div>
        <Title color={primaryColor}>{language === 'en' ? 'Cor do Fundo' : 'Background Color'}</Title>
          <SketchPicker color={secondaryColor} onChangeComplete={handleSecondaryChangeComplete} />
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
