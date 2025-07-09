import React from 'react';
import './ClientForm.css';

function ClientForm({ onSave }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      company: e.target.company.value
    };
    onSave(formData);
  };

  return (
    <form className="client-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
      </div>

      <div className="form-group">
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
      </div>

      <div className="form-group">
        <label>
          Phone:
          <input type="tel" name="phone" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"/>
        </label>
      </div>

      <div className="form-group">
        <label>
          Company:
          <input type="text" name="company" />
        </label>
      </div>

      <button type="submit" className="btn btn-primary">
        Save Client
      </button>
    </form>
  );
}

export default ClientForm;