// src/components/ClientList/ClientList.js
import React from 'react';

function ClientList({ clients }) {
  return (
    <table className="client-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Company</th>
        </tr>
      </thead>
      <tbody>
        {clients.map(client => (
          <tr key={client.id}>
            <td>{client.name}</td>
            <td>{client.email}</td>
            <td>{client.phone}</td>
            <td>{client.company}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ClientList;