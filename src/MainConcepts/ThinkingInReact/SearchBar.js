import React from 'react';

function SearchBar(props) {
  const filterText = props.filterText;
  const inStockOnly = props.inStockOnly;

  function handleFilterTextChange(e) {
    props.onFilterTextChange(e.target.value);
  }

  function handleInStockChange(e) {
    props.onInStockChange(e.target.checked);
  }

  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        value={filterText}
        onChange={handleFilterTextChange}
      />

      <p>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={handleInStockChange}
        />{' '}
        Only show product in stock
      </p>
    </form>
  );
}

export default SearchBar;
