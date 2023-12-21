import React, { useEffect, useState } from 'react';
import "./Adminpanel.css"

const AdminPanel: React.FC = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.dreampotential.org/ai/get-requests/');
        const result = await response.json();

        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  // Assuming the API response contains an array of requests, you can map over them.
  const requestItems = data.map((request: any) => (
    <div className='per-data' key={request.id}>
      <p className='data'>ID: {request.id}</p>
      <p className='data'>Input Content: {request.input_content}</p>
      <p className='data'>Response Content: {request.response_content}</p>
      {/* Add more fields as needed */}
    </div>
  ));

  return (
    <div className='admin-container'>
      <div className='header'><h1 className='heading'>Admin Panel</h1></div>
      {requestItems}
    </div>
  );
};

export default AdminPanel;
