import React from "react";

function useLocalStorage(itemName, initialValue) {
  let parsedItem = JSON.parse(localStorage.getItem(itemName));

  if (!parsedItem) {
    parsedItem = initialValue;
    saveItem(parsedItem);
  }

  const [item, setItem] = React.useState(parsedItem);

  function saveItem(_json) {
    localStorage.setItem(itemName, JSON.stringify(_json));
    setItem(_json);
  }

  return [item, saveItem];
}

export { useLocalStorage };
