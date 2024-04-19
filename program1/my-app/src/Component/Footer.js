import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer style={{ backgroundColor: theme.background, color: theme.text }}>
      <p>© 2024 My App. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
