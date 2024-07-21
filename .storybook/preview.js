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
      default: 'dark',
      values: [
        {
          name: 'light',
          value: '#FFFFFF',
        },
        {
          name: 'dark',
          value: '#000000',
        },
      ],
    },
  },
};

export const decorators = [
  (Story, context) => {
    const backgroundColor = context.globals.backgrounds?.value;
    const colorMode = backgroundColor === '#FFFFFF' ? 'light' : 'dark';

    return (
      <ThemeProvider theme={{ ...theme, colorMode }}>
        <GlobalStyles />
        <Story />
      </ThemeProvider>
    );
  },
];

export default preview;
