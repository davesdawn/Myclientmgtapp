import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import AddClientPage from './pages/AddClientPage/AddClientPage';
import ClientListPage from './pages/ClientListPage/ClientListPage';
import MeetingsPage from './pages/MeetingsPage/MeetingsPage';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <Router>
    <div className="app">
      {/* Navigation Bar */}
      <header className="navbar">
        <div className="navbar-brand">Client Management</div>
        <nav className="nav-links">
          <a href="/">Home</a>
          <a href="/add-client">Add Client</a>
          <a href="/clients">Clients</a>
          <a href="/meetings">Meetings</a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="content">
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/add-client' element={<AddClientPage />} />
          <Route path='/clients' element={<ClientListPage />} />
          <Route path='/meetings' element={<MeetingsPage />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Client Management App | Built with React</p>
      </footer>
    </div>
    </Router>

  );
}

export default App;