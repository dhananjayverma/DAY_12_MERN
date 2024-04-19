import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Main from './Component/Main';
import ThemeSwitcher from './Component/ThemeSwitcher';

const App = () => {
  return (
    <ThemeProvider>
      <div>
        <Header />
        <Main />
        <Footer />
        <ThemeSwitcher />
      </div>
    </ThemeProvider>
  );
};

export default App;
