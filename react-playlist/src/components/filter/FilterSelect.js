import React, { useState, useMemo } from 'react';

// function that accepts items
const FilterSelect = (items) => {
  const [filterGenre, setFilterGenre] = useState('');
  const [filterRating, setFilterRating] = useState(0);

  // event for the value when select changes
  const handleFilterChange = (e, filterType) => {
    // changes state 
    switch (filterType) {
      case 'filterGenre':
        console.log('genre is filtered')
        setFilterGenre(e.target.value)
        break;
      case 'filterRating':
        console.log('rating is filtered')
        setFilterRating(e.target.value)
        break;
      default:
        console.log('Nothing is filtered');
        break;
    }
  }

  // useMemo hook to store cache memory (prevent for products to filter twice with the same input)
  useMemo(() => {
    let filterableProducts = [items];
    // if filteredField is not empty then filter products from chosen field
    if (filterGenre !== '') {
      filterableProducts.filter(product => product.filterGenre === filterGenre)
    }
    if (filterRating !== 0) {
      filterableProducts.filter(product => product.filterRating === filterRating)
    }
    // return object with sorted items
    return filterableProducts;
  }, [items, filterGenre, filterRating]);

  return (
    <tr className="filter">
      {/* create empty td's, now select is right above Genre */}
      <td className="white-td"></td>
      <td className="white-td"></td>
      <td className="white-td">
        <select
          name="filterGenre"
          id="filterGenre"
          value={filterGenre}
          className="select-filter"
          onChange={(e) => handleFilterChange(e, 'filterGenre')}
        >
          <option value="">Filter genre</option>
          <option value="pop">Pop</option>
          <option value="nederpop">Nederpop</option>
          <option value="hiphoprap">Hiphop Rap</option>
        </select>
      </td>
      <td className="white-td">
        <select
          name="filterRating"
          id="filterGenre"
          value={filterRating}
          className="select-filter"
          onChange={(e) => handleFilterChange(e, 'filterRating')}
        >
          <option value="">Filter rating</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </td>
    </tr>
  );
}

export default FilterSelect;