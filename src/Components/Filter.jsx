import React from "react";
import "./Filter.css";

const Filter = ({ filters, onFilterChange }) => {
  const handleCheckboxChange = (filterName, option, checked) => {
    const newFilters = { ...filters };
    if (checked) {
      newFilters[filterName].add(option);
    } else {
      newFilters[filterName].delete(option);
    }
    onFilterChange(filterName, newFilters[filterName]);
  };

  const renderOptions = (filterName, options) => {
    return options.map((option) => (
      <div key={option} style={{ display: "flex" }}>
        <input
          type='checkbox'
          checked={filters[filterName].has(option)}
          onChange={(e) => handleCheckboxChange(filterName, option, e.target.checked)}
        />
        <label>{option}</label>
      </div>
    ));
  };

  return (
    <div className='filter-container'>
      <div>
        <h4>City:</h4>
        {renderOptions("city", ["dallas", "san francisco", "denver"])}
      </div>
      <div>
        <h4>Category:</h4>
        {renderOptions("category", ["one", "two"])}
      </div>
      <div>
        <h4>Type:</h4>
        {renderOptions("type", ["A", "B", "C"])}
      </div>
      <div>
        <h4>Active:</h4>
        {renderOptions("active", ["TRUE", "FALSE"])}
      </div>
    </div>
  );
};

export default Filter;
