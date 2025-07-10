import React from 'react';
import './ClientForm.css';

function ClientForm({ onSave }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      address: e.target.address.value,
      password: e.target.password.value
    };
      //verifying if both password matches
    if (e.target.password.value !== e.target.confirmPassword.value) {
      alert("Passwords do not match");
      return;
    }

    onSave(formData);
  };

  return (
    <form className="client-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>
          Name:
          <input type="text" name="name" placeholder="Enter Name" required />
        </label>
      </div>

      <div className="form-group">
        <label>
          Email:
          <input type="email" name="email" placeholder="Enter Email" required />
        </label>
      </div>

      <div className="form-group">
        <label>
          Address:
          <input type="text" name="address" placeholder="Enter Address" required />
        </label>
      </div>

      <div className="form-group">
        <label>
          Password:
          <input type="password" name="password" placeholder="Password" required />
        </label>
      </div>

      <div className="form-group">
        <label>
          Repeat Password
          <input type="password" name="confirmPassword" placeholder="Repeat Password" required />
        </label>
      </div>

      <button type="submit" className="btn btn-primary">
        Register
      </button>
    </form>
  );
}

export default ClientForm;