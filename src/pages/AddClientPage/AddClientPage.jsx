import React from 'react';
import ClientForm from '../../components/ClientForm/ClientForm';
import './AddClientPage.css'

function AddClientPage() {
  const handleSave = (clientData) => {
    console.log('Client saved:', clientData);
    alert('Client saved to console!');
  };

  return (
    <div className="add-client-page">
      <h2>Create a Client</h2><br></br>
      <p>Please fill in this form to create a client.</p>
      <ClientForm onSave={handleSave} />
    </div>
  );
}

export default AddClientPage;