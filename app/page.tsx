'use client'

import React, { useEffect, useState } from 'react';

export default function ClientSideFetch() {
  const [data, setData] = useState<Array<{ [key: string]: unknown }> | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/players') // Define the API endpoint
      .then((response) => response.json())
      .then((data) => {
        setData(data); // Store the fetched data
        setLoading(false); // Set loading to false
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false); // Handle errors
      });
  }, []); // Empty dependency array ensures this runs only once

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Data from API</h1>
      {data && Array.isArray(data) ? (
        <table border={1}>
          <thead>
            <tr>
              {Object.keys(data[0])
                .filter((key) => key !== '_id') // Exclude the '_id' column
                .map((key) => (
                  <th key={key}>{key}</th>
                ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item: { [s: string]: unknown; } | ArrayLike<unknown>, index: React.Key | null | undefined) => (
              <tr key={index}>
                {Object.entries(item)
                  .filter(([key]) => key !== '_id') // Exclude the '_id' column
                  .map(([_, value], idx) => (
                    <td key={idx}>{String(value)}</td>
                  ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}