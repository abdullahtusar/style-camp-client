import { useState, useEffect } from 'react';
import './App.css';
import DarkModeToggle from 'react-dark-mode-toggle';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('darkMode') === 'true'
  );

  useEffect(() => {
    localStorage.setItem('darkMode', isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div>
      <h1>Hello, world!</h1>
      <DarkModeToggle
        onChange={toggleDarkMode}
        checked={isDarkMode}
        size={50}
      />
    </div>
  );
};

export default App;