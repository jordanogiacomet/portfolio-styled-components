import { LanguageToggleButton } from '.';
import { LanguageProvider } from '../../contexts/LanguageContext';
import { ColorModeProvider } from '../../contexts/ColorModeContext';

export default {
  title: 'LanguageToggleButton',
  component: LanguageToggleButton,
  decorators: [
    (Story) => (
      <ColorModeProvider>
        <LanguageProvider>
          <Story />
        </LanguageProvider>
      </ColorModeProvider>
    ),
  ],
};

const Template = (args) => <LanguageToggleButton {...args} />;

export const Default = Template.bind({});
Default.args = {};
