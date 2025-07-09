// src/pages/ClientListPage/ClientListPage.jsx
import React from 'react';
import ClientList from '../../components/ClientList/ClientList';
import './ClientListPage.css';

function ClientListPage() {
  // For now, we'll hardcode some sample data
  const clients = [
    { id: 1, name: "Alice Smith", email: "alice@example.com", phone: "123-456-7890", company: "ABC Corp" },
    { id: 2, name: "Bob Johnson", email: "bob@example.com", phone: "987-654-3210", company: "XYZ Inc" },
    { id: 3, name: "Charlie Brown", email: "charlie@example.com", phone: "555-555-5555", company: "Tech Solutions" }
  ];

  return (
    <div className="client-list-page">
      <h2>Client List</h2>
      <ClientList clients={clients} />
    </div>
  );
}

export default ClientListPage;