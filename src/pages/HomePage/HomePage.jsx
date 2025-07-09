import React from 'react';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-page">
      
      <main className="hero">
        <div className="hero-content">
          <h1>Welcome to Your Client Management App</h1>
          <p>Organize clients, schedule meetings, and manage projects with ease.</p>
          <div className="hero-buttons">
            <a href="/add-client" className="btn btn-primary">Add New Client</a>
            <a href="/clients" className="btn btn-outline">View All Clients</a>
          </div>
        </div>
      </main>
      
    </div>
  );
}

export default HomePage;