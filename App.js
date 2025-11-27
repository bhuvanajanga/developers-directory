import React, { useEffect, useState } from 'react';
import DeveloperForm from './components/DeveloperForm';
import DeveloperList from './components/DeveloperList';
import { fetchDevelopers, createDeveloper } from './api';

function App() {
  const [developers, setDevelopers] = useState([]);

  // Fetch developers when app loads
  useEffect(() => {
    fetchDevelopers()
      .then((data) => setDevelopers(data))
      .catch((err) => console.error('Error fetching developers:', err));
  }, []);

  // Add developer handler
  const handleAddDeveloper = async (dev) => {
    try {
      const newDev = await createDeveloper(dev);
      setDevelopers([newDev, ...developers]);
    } catch (err) {
      console.error('Error adding developer:', err);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-2">Developers Directory</h1>
      <p className="mb-4">Add and browse developers</p>
      <DeveloperForm onAdd={handleAddDeveloper} />
      <DeveloperList developers={developers} />
    </div>
  );
}

export default App;
