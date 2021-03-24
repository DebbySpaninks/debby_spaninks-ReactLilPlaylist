import { useState, useMemo } from 'react';

// function that accepts items
const useSortableData = (items) => {
  // start with sort nothing (null)                       Config = wijzigen van instellingen     
  // beginstuk terugveranderen als het lukt naar useState(null) en 2de argument naast items verwijderen???
  const [sortConfig, setSortConfig] = useState(null);

  // useMemo hook to store cache memory (prevent for products to sort twice with the same input)
  const sortedItems = useMemo(() => {
    // returns copy from array with products
    let sortableItems = [...items];
    // if sortedField is not null then sort products from chosen field
    if (sortConfig !== null) {
      // alphabetical sortfunction with two arguments
      sortableItems.sort((a, b) => {
        // if ascending then we do as before if not we do the opposite
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        // a and b equal? then return 0 to keep the current order
        return 0;
      });
    }
    // returns object with the sorted items
    return sortableItems;
  }, [items, sortConfig])


  // function to re-sort the items
  const requestSort = key => {
    let direction = 'ascending';
    // if key and direction = ascending then direction state must be update to descending
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };
  return { items: sortedItems, requestSort };
};


export default useSortableData;