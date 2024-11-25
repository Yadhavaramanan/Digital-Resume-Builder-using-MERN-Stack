//TemplateSelectionPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const templates = [
  { id: 1, name: 'Classic Template', pdfUrl: `${process.env.PUBLIC_URL}/components/ClassicTemplate.html` },
  { id: 2, name: 'Modern Template', pdfUrl: `${process.env.PUBLIC_URL}/components/temp2.html` },
  { id: 3, name: 'Creative Template', pdfUrl: `${process.env.PUBLIC_URL}/components/temp3.html` },
];


const TemplateSelectionPage = () => {
  const navigate = useNavigate();
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [pdfError, setPdfError] = useState(false); // State to handle PDF loading error

  const handleTemplateSelect = (templateId) => {
    // Redirect to resume editor with the selected template
    navigate(`/builder?template=${templateId}`);
  };

  const handlePreview = (pdfUrl) => {
    setSelectedTemplate(pdfUrl);
    setPdfError(false); // Reset error state on new preview
  };

  const handleError = () => {
    setPdfError(true);
  };

  return (
    <div className="template-selection">
      <h1>Select a Resume Template</h1>
      <div className="template-grid">
        {templates.map(template => (
          <div key={template.id} className="template-card" onClick={() => handleTemplateSelect(template.id)}>
            <h3>{template.name}</h3>
            <button onClick={() => handlePreview(template.pdfUrl)}>Preview</button>
          </div>
        ))}
      </div>
      {selectedTemplate && (
        <div className="pdf-preview">
          <h2>Template Preview</h2>
          {pdfError ? (
            <p>Error loading PDF. Please try again.</p>
          ) : (
            <iframe
              src={selectedTemplate}
              width="100%"
              height="500px"
              title="PDF Preview"
              onError={handleError} // Handle iframe loading error
            />
          )}
        </div>
      )}
    </div>
  );
};

export default TemplateSelectionPage;
