// src/components/Child.jsx
import React from 'react';
import Grandchild from './Grandchild';

const Child = ({ child }) => {
  return (
    <div style={{ marginLeft: '20px', }}>
      <h3>{child.name} (Age: {child.age})</h3>
      {child.grandchildren.map((grandchild, index) => (
        <Grandchild key={index} grandchild={grandchild} />
      ))}
    </div>
  );
};

export default Child;
