// src/components/Grandchild.jsx
import React from 'react';

const Grandchild = ({ grandchild }) => {
  return (
    <div style={{ marginLeft: '20px' }}>
      <h4>{grandchild.name} (Favorite Hobby: {grandchild.hobby})</h4>
    </div>
  );
};

export default Grandchild;
