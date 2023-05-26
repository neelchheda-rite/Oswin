import { useEffect, useState } from "react";

function useSessionStorage(defaultValue, key) {
  const [value, setValue] = useState(() => {
    const sessionStorageValue = window.sessionStorage.getItem(key);
    return sessionStorageValue !== null
      ? sessionStorageValue
      : defaultValue;
  });

  useEffect(() => {
    window.sessionStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue];
}

export { useSessionStorage };