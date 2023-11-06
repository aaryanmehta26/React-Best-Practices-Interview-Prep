import { useEffect, useState } from 'react';

/**
 * This hook is useful when you want to debounce user input or API requests 
 * in your React component to avoid frequent updates and improve performance, 
 * especially in scenarios like search input fields or auto-suggestions. 
 */

export const useDebounce = <T>(value: T, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debouncedValue;
};







