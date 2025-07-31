// https://github.com/Greg01001000/module10a-profile

import { useState } from 'react';

function Profile(props) {
  const { name, occupation, funFact, imageUrl } = props;
  const [showFact, setShowFact] = useState(false);

  const toggleFact = () => {
    setShowFact(!showFact);
  };

  return (
    <div style={{
      maxWidth: '350px',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '12px',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      margin: '20px auto',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
    }}>
      <img
        src={imageUrl}
        alt={name + "'s profile"}
        style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', marginBottom: '12px' }}
      />
      <h2 style={{ margin: '0', fontSize: '22px' }}>{name}</h2>
      <p style={{ margin: '4px 0', fontSize: '16px' }}>{occupation}</p>
      <button onClick={toggleFact} style={{
        marginTop: '12px',
        padding: '8px 16px',
        fontSize: '14px',
        borderRadius: '6px',
        border: 'none',
        cursor: 'pointer',
        backgroundColor: '#007BFF',
        color: 'white'
      }}>
        {showFact ? 'Hide Fact' : 'Show Fact'}
      </button>
      {showFact && <p style={{ marginTop: '16px', fontSize: '14px' }}>{funFact}</p>}
    </div>
  );
}

export default Profile;
