import React, { useState, useEffect } from 'react';
import Filter from './Components/Filter';
import Table from './Components/Table';
import jsonData from './data/data.json';

const App = () => {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    city: new Set(),
    category: new Set(),
    type: new Set(),
    active: new Set()
  });

  useEffect(() => {
    setData(jsonData);
  }, []);

  const handleFilterChange = (filterName, filterValues) => {
    setFilters({
      ...filters,
      [filterName]: filterValues
    });
  };

  const filteredData = data.filter(item => {
    return (
      (filters.city.size === 0 || filters.city.has(item.city)) &&
      (filters.category.size === 0 || filters.category.has(item.category)) &&
      (filters.type.size === 0 || filters.type.has(item.type)) &&
      (filters.active.size === 0 || filters.active.has(item.active))
    );
  });

  return (
    <div>
      <Filter filters={filters} onFilterChange={handleFilterChange} />
      <Table data={filteredData} />
    </div>
  );
};

export default App;
