import React from 'react';
import  { useState, useEffect } from 'react';


function Collection() {
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);
   useEffect(() => {
    // Make a GET request to your Node.js backend
    fetch('http://localhost:3000/api/collections')
      .then(response => response.json())
      .then(data => {
        setCollections(data);
        setLoading(false);
      })
      .catch(error => console.error('Error fetching collections:', error));
  }, []);
   if (loading) return <div>Loading collections...</div>;

  return (
   <>
    <div style={{color:"white"}}>
      <h2>Our Jewelry Collections</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {collections.map(collection => (
          <div key={collection._id} style={{ border: '1px solid #ccc', padding: '15px', width: '250px' }}>
            <img src={collection.image_url} alt={collection.name} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
            <h3>{collection.name}</h3>
            <p>{collection.description}</p>
          </div>
        ))}
      </div>
    </div>
   
   
   </>
  );
}

export default Collection;