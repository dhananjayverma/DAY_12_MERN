import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Header = () => {
  const { theme } = useTheme();

  return (
    <header style={{ backgroundColor: theme.background, color: theme.text }}>
      <h1>My App</h1>
    </header>
  );
};

export default Header;
