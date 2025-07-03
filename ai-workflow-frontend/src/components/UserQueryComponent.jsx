// src/components/UserQueryComponent.jsx
import React from 'react';

function UserQueryComponent({ data }) {
  return (
    <div style={{ border: '1px solid gray', padding: '10px' }}>
      <label>Enter your query:</label>
      <input
        type="text"
        placeholder="Ask something..."
        onChange={(e) => data.onChange(e.target.value)}
      />n
    </div>
  );
}

export default UserQueryComponent;
