import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Main = () => {
  const { theme } = useTheme();

  return (
    <main style={{ backgroundColor: theme.background, color: theme.text }}>
      <h2>Welcome to My App</h2>
      <p>This is the main content.</p>
    </main>
  );
};

export default Main;
