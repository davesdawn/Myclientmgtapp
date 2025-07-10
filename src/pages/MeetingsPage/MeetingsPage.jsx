import React from 'react';
import MeetingForm from '../../components/MeetingForm/MeetingForm';
import MeetingList from '../../components/MeetingList/MeetingList';
import './MeetingsPage.css';

function MeetingsPage() {
  const handleSave = async (meetingData) => {
  try {
    const response = await fetch('http://localhost:3001/meetings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(meetingData),
    });

    if (!response.ok) {
      throw new Error('Failed to save meeting');
    }

    const savedMeeting = await response.json();
    console.log('Meeting saved:', savedMeeting);
    alert('Meeting successfully created!');
  } catch (error) {
    console.error('Error saving meeting:', error);
    alert('There was an error saving the meeting.');
  }
};


  return (
    <div className="meetings-page">
      <h2>Create a Meeeting Schedule</h2><br />
      <MeetingForm onSave={handleSave} />
      <MeetingList />
    </div>
  );
}

export default MeetingsPage;