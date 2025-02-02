export const theme = {
  colors: {
    primaryColor: '#000000',
    secondaryColor: '#FFFFFF',
    white: '#FFFFFF',
    mediumGray: '#CCCCCC',
    textColor: '#ADB7BE',
    inputGray: '#9CA2A9',
    menuButtonGray:'#B0B0B0',
    backgroundWhatsapp: '#25d366',
    heroWrapperBackground: '#181818',
    borderFooter: '#33353F',
    backgroundFooterDark: '#18191E',
    backgroundFooterLight: '#1E3A8A',
    backgroundNavDark: '#121212',
    hoverBgColor: 'slategray',
    hoverInnerBgColor: 'darkslategray',
    innerBgColor: '#121212',
    gradientColors: {
      light: {
        from: '#4169E1',
        via: '#2B6DE1',
        to: '#00008B'
      },
      dark: {
        from: '#1E90FF',
        via: '#4169E1',
        to: '#00008B',
      },
    },
  },
  font: {
    sizes: {
      xsmall: '1.2rem',
      small: '1.6rem',
      base: '1.6rem', // text-base
      lg: '1.8rem', // text-lg
      xl: '2.1rem', // text-xl
      medium: '2.4rem',
      big: '3.2rem',
      xbig: '4rem',
      xxbig: '4.8rem',
      huge: '5.6rem',
      xhuge: '6.4rem',
    },
  },
  media: {
    lteMedium: '(max-width: 768px)',
    sm: '(min-width: 640px)', // Adicionando breakpoint sm
    md: '(min-width: 768px)', // Adicionando breakpoint md
    lg: '(min-width: 1024px)', // Adicionando breakpoint lg
    xl: '(min-width: 1280px)', // Adicionando breakpoint xl
    xxl: '(min-width: 1536px)', // Adicionando breakpoint xxl
  },
  mediaMax: {
    sm: '(max-width: 640px)', // Adicionando breakpoint sm
    md: '(max-width: 768px)', // Adicionando breakpoint md
    lg: '(max-width: 1024px)', // Adicionando breakpoint lg
    xl: '(max-width: 1280px)', // Adicionando breakpoint xl
    xxl: '(max-width: 1536px)', // Adicionando breakpoint xxl
  },
  container: {
    maxWidth: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1536px',
    },
  },
  spacings: {
    xsmall: '0.8rem', // 8px
    small: '1.6rem', // 16px
    base: '1.5rem', // mb-6
    medium: '2.4rem', // 24px
    big: '3.2rem', // 32px
    xbig: '4rem', // 40px
    xxbig: '4.8rem', // 48px
    huge: '5.6rem', // 56px
    xhuge: '6.4rem', // 64px
  },
  button: {
    default: {
      padding: '1rem 1.5rem',
      borderRadius: '9999px',
      textColor: '#FFFFFF',
      background: 'linear-gradient(to bottom right, #ADD8E6, #0000FF)',
      hoverBgColor: 'slategray',
    },
    hireMe: {
      padding: '1rem 1.5rem',
      borderRadius: '9999px',
      textColor: '#FFFFFF',
      background: 'linear-gradient(to bottom right, #1E90FF, #4169E1, #00008B)',
      hoverBgColor: 'slategray',
    },
    downloadCV: {
      padding: '0.4rem',
      borderRadius: '9999px',
      textColor: '#FFFFFF',
      background: 'linear-gradient(to bottom right, #1E90FF, #4169E1, #00008B)',
      hoverBgColor: 'slategray',
      innerBgColor: '#121212',
      innerPadding: '1rem 3rem',
    },
  },
};
