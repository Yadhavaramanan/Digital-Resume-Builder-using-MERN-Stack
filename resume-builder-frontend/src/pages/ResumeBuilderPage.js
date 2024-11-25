//ResumeBuilderPage.js
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import jsPDF from 'jspdf';
import axios from 'axios';

const ResumeBuilderPage = () => {
  const location = useLocation();
  const templateId = new URLSearchParams(location.search).get('template');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    education: '',
    skills: ''
  });

  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError(''); // Clear error when user types
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Check for required fields
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.experience ||
      !formData.education ||
      !formData.skills
    ) {
      setError('All fields are required.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/resumes/add', formData);
      console.log('Resume saved:', response.data);
      alert('Resume saved successfully!'); 
    } catch (err) {
      console.error('Error saving resume:', err.response ? err.response.data : err.message); // Log detailed error
      setError('Failed to save resume. Please try again.');
    }
  };

  const exportToPDF = () => {
    // Check for required fields
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.experience ||
      !formData.education ||
      !formData.skills
    ) {
      setError('All fields are required.');
      return;
    }
  
    const doc = new jsPDF();
  
    // Add content to PDF
    doc.text(`Resume - Template ${templateId}`, 20, 10);
    doc.text(`Name: ${formData.name}`, 20, 20);
    doc.text(`Email: ${formData.email}`, 20, 30);
    doc.text(`Phone: ${formData.phone}`, 20, 40);
    doc.text(`Experience: ${formData.experience}`, 20, 50);
    doc.text(`Education: ${formData.education}`, 20, 70);
    doc.text(`Skills: ${formData.skills}`, 20, 90);
  
    // Save the PDF with the user's name
    const fileName = `${formData.name} resume.pdf`.replace(/\s+/g, '_'); // Replaces spaces with underscores
    doc.save(fileName);
  };
  
  return (
    <div className="resume-builder">
      <h1>Resume  {formData.name}</h1>

      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}

      <form onSubmit={handleFormSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
        </label>
        <label>
          Phone:
          <input type="text" name="phone" value={formData.phone} onChange={handleInputChange} />
        </label>
        <label>
          Experience:
          <textarea name="experience" value={formData.experience} onChange={handleInputChange} />
        </label>
        <label>
          Education:
          <textarea name="education" value={formData.education} onChange={handleInputChange} />
        </label>
        <label>
          Skills:
          <textarea name="skills" value={formData.skills} onChange={handleInputChange} />
        </label>
        <button type="submit">Save and Preview</button>
      </form>

      <button onClick={exportToPDF}>Export to PDF</button>

      <div className="resume-preview">
        <h2>Preview</h2>
        <div className="preview-content">
          <h3>{formData.name}</h3>
          <p>Email: {formData.email}</p>
          <p>Phone: {formData.phone}</p>
          <h4>Experience</h4>
          <p>{formData.experience}</p>
          <h4>Education</h4>
          <p>{formData.education}</p>
          <h4>Skills</h4>
          <p>{formData.skills}</p>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilderPage;
