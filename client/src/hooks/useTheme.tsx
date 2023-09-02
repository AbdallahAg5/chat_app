import { useState, useEffect } from 'react';
type useThemeReturnType = {
  changeTheme: (newTheme: 'dark' | 'light') => void;
  theme: string;
};

const useTheme: (initialTheme: 'dark' | 'light') => useThemeReturnType = (
  initialTheme
) => {
  const [theme, setTheme] = useState<'dark' | 'light'>(initialTheme);

  document.documentElement.setAttribute('data-theme', initialTheme);

  useEffect(() => {
    // Load the theme from local storage during initialization
    const localTheme = localStorage.getItem('theme');
    if (localTheme) {
      setTheme(localTheme as 'dark' | 'light');
    }
    localStorage.setItem('chakra-ui-color-mode', theme);
  }, [theme]);

  const changeTheme = (newTheme: 'dark' | 'light') => {
    localStorage.setItem('theme', newTheme);
    localStorage.setItem('chakra-ui-color-mode', newTheme);
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return { changeTheme, theme };
};

export default useTheme;
