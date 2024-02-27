import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageString = localStorage.getItem(itemName);
        let parsedItem = JSON.parse(localStorageString);

        if (parsedItem) {
          saveItem(parsedItem);
        } else {
          saveItem(initialValue);
        }

        setLoading(false);
        setError(false);
      } catch (err) {
        setError(true);
        localStorage.removeItem(itemName);
      }
    }, 2000);
  }, []);

  function saveItem(_json) {
    localStorage.setItem(itemName, JSON.stringify(_json));
    if (_json !== item) setItem(_json);
  }

  return { item, saveItem, loading, error };
}

export { useLocalStorage };
