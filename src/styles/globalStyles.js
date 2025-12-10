import { createGlobalStyle } from 'styled-components';

export const theme = {
  colors: {
    primary: '#0B1020',
    accent: '#6C5CE7',
    secondary: '#00BFA6',
    background: '#F7F9FC',
    text: '#111827',
    textLight: '#6B7280',
    white: '#FFFFFF',
    cardBg: '#FFFFFF',
    border: '#E5E7EB',
  },
  fonts: {
    heading: "'Montserrat', sans-serif",
    body: "'Inter', sans-serif",
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1280px',
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    xxl: '4rem',
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  },
};

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    width: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.body};
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.background};
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }

  #root {
    width: 100%;
    min-height: 100vh;
    margin: 0;
    padding: 0;
  }

  main {
    width: 100%;
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1rem;
  }

  h1 {
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: 800;
  }

  h2 {
    font-size: clamp(1.75rem, 4vw, 2.5rem);
    font-weight: 700;
  }

  h3 {
    font-size: clamp(1.5rem, 3vw, 2rem);
  }

  h4 {
    font-size: clamp(1.25rem, 2.5vw, 1.5rem);
  }

  p {
    margin-bottom: 1rem;
    font-size: 1rem;
    line-height: 1.7;
  }

  a {
    color: ${({ theme }) => theme.colors.accent};
    text-decoration: none;
    transition: all 0.2s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }

    &:focus {
      outline: 2px solid ${({ theme }) => theme.colors.accent};
      outline-offset: 2px;
    }
  }

  button {
    font-family: ${({ theme }) => theme.fonts.body};
    cursor: pointer;
    border: none;
    transition: all 0.2s ease;

    &:focus {
      outline: 2px solid ${({ theme }) => theme.colors.accent};
      outline-offset: 2px;
    }
  }

  ul {
    list-style-position: inside;
    margin-bottom: 1rem;
  }

  li {
    margin-bottom: 0.5rem;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  section {
    padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.md};

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      padding: ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.lg};
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      padding: ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.xl};
    }
  }
`;
