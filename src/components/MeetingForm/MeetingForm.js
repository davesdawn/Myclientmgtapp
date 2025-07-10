import React from 'react';
import './MeetingForm.css';

function MeetingForm({ onSave }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      topic: e.target.topic.value,
      attendees: parseInt(e.target.attendees.value),
      date: e.target.date.value,
      time: e.target.time.value,
    };

    onSave(formData);
  };

  return (
    <form className="meeting-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>
          Meeting Topic:
          <input type="text" name="topic" placeholder="Enter Meeting Topic" required />
        </label>
      </div>

      <div className="form-group">
        <label>
          Number of People:
          <input type="number" name="attendees" placeholder="Enter number of people" required />
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

      <button type="submit" className="btn btn-primary">
        Schedule Meeting
      </button>
    </form>
  );
}

export default MeetingForm;
