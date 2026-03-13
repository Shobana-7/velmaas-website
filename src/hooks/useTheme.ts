import { useEffect } from 'react';

export function useTheme() {
  useEffect(() => {
    // Force light mode — remove any dark class and clear stored preference
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }, []);

  return { dark: false, toggle: () => {} };
}

