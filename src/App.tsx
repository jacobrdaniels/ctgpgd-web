import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { ThemeProvider } from "@/components/theme-provider"


const App: React.FC = () => {
  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </ThemeProvider>

  );
};

export default App;
