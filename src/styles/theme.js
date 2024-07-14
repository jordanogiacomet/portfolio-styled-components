export const theme = {
  colors: {
    primaryColor: '#0A1128',
    secondaryColor: '#dc143c',
    white: '#FFFFFF',
    mediumGray: '#DDDDDD',
    textColor: '#ADB7BE',
    gradientFrom: 'blue',
    gradientVia: 'purple',
    gradientTo: 'pink',
    hoverBgColor: 'slategray',
    hoverInnerBgColor: 'darkslategray',
    innerBgColor: '#121212',
  },
  font: {
    sizes: {
      xsmall: '0.8rem',
      small: '1.6rem',
      base: '1.5rem', // text-base
      lg: '1.8rem', // text-lg
      xl: '2rem', // text-xl
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
      background: 'linear-gradient(to bottom right, blue, purple, pink)',
      hoverBgColor: 'slategray',
    },
    hireMe: {
      padding: '1rem 1.5rem',
      borderRadius: '9999px',
      textColor: '#FFFFFF',
      background: 'linear-gradient(to bottom right, blue, purple, pink)',
      hoverBgColor: 'slategray',
    },
    downloadCV: {
      padding: '0.4rem',
      borderRadius: '9999px',
      textColor: '#FFFFFF',
      background: 'linear-gradient(to bottom right, blue, purple, pink)',
      hoverBgColor: 'darkslategray',
      innerBgColor: '#121212',
      innerPadding: '1rem 3rem',
    },
  },
};
