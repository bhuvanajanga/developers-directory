import React, { useState } from 'react';

function DeveloperList({ developers }) {
  const [search, setSearch] = useState('');

  const filtered = developers.filter((dev) => {
    const roleMatch = dev.role.toLowerCase().includes(search.toLowerCase());
    const techMatch =
      Array.isArray(dev.techStack) &&
      dev.techStack.some((tech) =>
        tech.toLowerCase().includes(search.toLowerCase())
      );
    return roleMatch || techMatch;
  });

  if (!developers || developers.length === 0) {
    return <p>No developers found.</p>;
  }

  return (
    <div className="mt-4">
      <input
        type="text"
        placeholder="Search by role or tech"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 border rounded mb-4"
      />

      {filtered.map((dev) => (
        <div key={dev.id} className="p-4 border rounded mb-2">
          <h3 className="font-semibold">{dev.name}</h3>
          <p>Role: {dev.role}</p>
          <p>Experience: {dev.experience} years</p>
          <p>
            Tech Stack:{' '}
            {Array.isArray(dev.techStack) ? dev.techStack.join(', ') : dev.techStack}
          </p>
        </div>
      ))}
    </div>
  );
}

export default DeveloperList;
