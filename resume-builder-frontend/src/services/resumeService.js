import axios from 'axios';

const API_URL = 'http://localhost:5000/api/resumes/';

// Get all resumes
export const getAllResumes = async () => {
  return await axios.get(`${API_URL}/all`);
};

// Add a new resume
export const addResume = async (resumeData) => {
  return await axios.post(`${API_URL}/add`, resumeData);
};
