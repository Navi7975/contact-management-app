import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactsPage from './pages/ContactsPage';
import DashboardPage from './pages/DashboardPage';
import ContactDetails from './components/ContactDetails';

const App: React.FC = () => {
  return (
    <Router>
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<ContactsPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/contact/:id" element={<ContactDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
