// src/components/MeetingList/MeetingList.js
import React, { useEffect, useState } from 'react';
import './MeetingList.css';

function MeetingList() {
  const [meetings, setMeetings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3001/meetings')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch meetings');
        }
        return res.json();
      })
      .then((data) => {
        setMeetings(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="loading">Loading meetings...</p>;

  return (
    <div className="meeting-list-container">
      <h2>Scheduled Meetings</h2>
      <ul className="meeting-list">
        {meetings.map((meeting) => (
          <li key={meeting.id} className="meeting-item">
            <strong>{meeting.topic}</strong><br />
             Attendees: {meeting.attendees}<br />
             {meeting.date} at {meeting.time}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MeetingList;
