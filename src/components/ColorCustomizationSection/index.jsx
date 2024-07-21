// src/components/ColorCustomizationSection/index.jsx
import * as Styled from './styles';
import { Heading } from '../Heading';
import { GradientText } from '../GradientText';
import { useLanguage } from '../../contexts/LanguageContext';
import { ColorPicker } from '../ColorPicker';
import { AnimatedSection } from '../AnimatedSection';

export const ColorCustomizationSection = () => {
  const { language } = useLanguage();
  
  return (
    <AnimatedSection x={30} y={0}>
      <Styled.Container>
        <Heading size='medium'><GradientText>{language === 'en' ? 'Customize as cores do website' : 'Customize the colors of the website'}</GradientText></Heading>
        <ColorPicker />
      </Styled.Container>
    </AnimatedSection>
  );
};

ColorCustomizationSection.propTypes = {};
