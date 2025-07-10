
import React from 'react';
import './ClientList.css';

function ClientList({ clients }) {
  return (
    <table className="client-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
         
        </tr>
      </thead>
      <tbody>
        {clients.map(client => (
          <tr key={client.id}>
            <td>{client.name}</td>
            <td>{client.email}</td>
            <td>{client.phone}</td>
           
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ClientList;