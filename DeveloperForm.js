import React from 'react';

function DeveloperList({ developers }) {
  if (!developers || developers.length === 0) {
    return <p className="text-gray-500 mt-4">No developers found.</p>;
  }

  return (
    <div className="mt-4 space-y-3">
      {developers.map((dev) => (
        <div
          key={dev.id}
          className="p-4 border rounded shadow-sm hover:shadow-md transition"
        >
          <h3 className="text-lg font-semibold">{dev.name}</h3>
          <p>
            <strong>Role:</strong> {dev.role}
          </p>
          <p>
            <strong>Experience:</strong> {dev.experience} {dev.experience === 1 ? 'year' : 'years'}
          </p>
          <p>
            <strong>Tech Stack:</strong>{' '}
            {Array.isArray(dev.techStack) ? dev.techStack.join(', ') : dev.techStack}
          </p>
        </div>
      ))}
    </div>
  );
}

export default DeveloperList;
