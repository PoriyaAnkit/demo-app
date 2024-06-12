import React from 'react';
import './Table.css'
const Table = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>City</th>
          <th>Category</th>
          <th>Type</th>
          <th>Active</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.city}</td>
            <td>{item.category}</td>
            <td>{item.type}</td>
            <td>{item.active}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
