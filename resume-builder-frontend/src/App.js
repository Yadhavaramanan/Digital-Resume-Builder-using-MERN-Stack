//App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ResumeBuilderPage from './pages/ResumeBuilderPage';
import TemplateSelectionPage from './pages/TemplateSelectionPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/builder" element={<ResumeBuilderPage />} />
        <Route path="/templates" element={<TemplateSelectionPage />} />
      </Routes>
    </Router>
  );
}

export default App;
