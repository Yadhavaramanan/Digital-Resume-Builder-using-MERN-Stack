import React from 'react';
import './ClassicTemplate.css'; // You can add external CSS or use inline styles 

const ClassicTemplate = ({ name, email, phone, experience, education, skills }) => {
  return (
    <div className="resume-template classic">
      <h1>{name}</h1>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Phone:</strong> {phone}</p>

      <h2>Experience</h2>
      <p>{experience}</p>

      <h2>Education</h2>
      <p>{education}</p>

      <h2>Skills</h2>
      <ul>
        <li>{skills}</li>
      </ul>
    </div>
  );
};

export default ClassicTemplate;
