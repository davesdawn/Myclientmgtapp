// src/components/MeetingForm/MeetingForm.js
import React from 'react';
import './MeetingForm.css';

function MeetingForm({ onSave }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      clientId: e.target.clientId.value,
      topic: e.target.topic.value,
      date: e.target.date.value,
      time: e.target.time.value,
      location: e.target.location.value,
      attendees: e.target.attendees.value
    };
    onSave(formData);
  };

  return (
    <form className="meeting-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>
          Client ID:
          <input type="text" name="clientId" required />
        </label>
      </div>

      <div className="form-group">
        <label>
          Topic:
          <input type="text" name="topic" required />
        </label>
      </div>

      <div className="form-group">
        <label>
          Date:
          <input type="date" name="date" required />
        </label>
      </div>

      <div className="form-group">
        <label>
          Time:
          <input type="time" name="time" required />
        </label>
      </div>

      <div className="form-group">
        <label>
          Location:
          <input type="text" name="location" />
        </label>
      </div>

      <div className="form-group">
        <label>
          Attendees:
          <input type="text" name="attendees" />
        </label>
      </div>

      <button type="submit" className="btn btn-primary">
        Schedule Meeting
      </button>
    </form>
  );
}

export default MeetingForm;