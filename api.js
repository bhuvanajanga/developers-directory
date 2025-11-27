// frontend/src/api.js

export const API_BASE = 'http://localhost:4000'; // backend URL

// Fetch all developers
export const fetchDevelopers = async () => {
  const response = await fetch(`${API_BASE}/developers`);
  if (!response.ok) {
    throw new Error('Failed to fetch developers');
  }
  const data = await response.json();
  return data;
};

// Add a new developer
export const createDeveloper = async (developer) => {
  const response = await fetch(`${API_BASE}/developers`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(developer),
  });
  if (!response.ok) {
    throw new Error('Failed to create developer');
  }
  const data = await response.json();
  return data;
};
