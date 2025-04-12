'use client'

import React, {useEffect, useState } from 'react'

export default function ClientSideFetch() {
  const [data, setData] = useState(null);
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
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}