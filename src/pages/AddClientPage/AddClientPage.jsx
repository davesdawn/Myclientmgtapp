import React from 'react';
import ClientForm from '../../components/ClientForm/ClientForm';
import './AddClientPage.css';

function AddClientPage() {
  const handleSave = async (clientData) => {
    try {
      const response = await fetch('http://localhost:3001/clients', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(clientData),
      });

      if (!response.ok) {
        throw new Error('Failed to save client');
      }

      const savedClient = await response.json();
      console.log('Client saved:', savedClient);
      alert('Client successfully created!');
    } catch (error) {
      console.error('Error saving client:', error);
      alert('There was an error saving the client.');
    }
  };

  return (
    <div className="add-client-page">
      <h2>Create a Client</h2>
      <br />
      <p>Please fill in this form to create a client.</p>
      <ClientForm onSave={handleSave} />
    </div>
  );
}

export default AddClientPage;