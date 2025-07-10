import React, { useEffect, useState } from 'react';
import ClientList from '../../components/ClientList/ClientList';
import './ClientListPage.css';

function ClientListPage() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    // Fetch clients from the JSON Server
    fetch('http://localhost:3001/clients')
      .then((response) => response.json())
      .then((data) => setClients(data))
      .catch((error) => console.error('Error fetching clients:', error));
  }, []);

  return (
    <div className="client-list-page">
      <h2>Client List</h2>
      {clients.length > 0 ? (
        <ClientList clients={clients} />
      ) : (
        <p>Loading clients...</p>
      )}
    </div>
  );
}

export default ClientListPage;