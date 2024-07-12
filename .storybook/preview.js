/** @type { import('@storybook/react').Preview } */
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../src/styles/global-styles';
import { theme } from '../src/styles/theme';
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: theme.colors.white,
        },
        {
          name: 'dark',
          value: theme.colors.primaryColor,
        },
      ]
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
        <Story />
        <GlobalStyles />
    </ThemeProvider>
  )
];

export default preview;
