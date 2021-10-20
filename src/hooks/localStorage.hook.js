import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [storedVal, setStoredVal] = useState(() => {
    try {
      const item = localStorage.getItem(key);

      return item ? JSON.parse(item) : initialValue;
    } catch (err) {
      console.log(err);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedVal) : value;

      setStoredVal(valueToStore);

      localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (err) {
      console.log(err);
    }
  };

  return [storedVal, setValue];
};

export default useLocalStorage;
