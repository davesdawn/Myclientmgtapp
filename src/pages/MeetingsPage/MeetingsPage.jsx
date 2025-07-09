import React from 'react';
import MeetingForm from '../../components/MeetingForm/MeetingForm';
import './MeetingsPage.css';

function MeetingsPage() {
  const handleSave = (meetingData) => {
    console.log('Meeting saved:', meetingData);
    alert('Meeting saved to console!');
  };

  return (
    <div className="meetings-page">
      <h2>Schedule a New Meeting</h2>
      <MeetingForm onSave={handleSave} />
    </div>
  );
}

export default MeetingsPage;