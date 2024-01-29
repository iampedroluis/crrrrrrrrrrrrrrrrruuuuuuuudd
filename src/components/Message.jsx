import React from 'react';

export const Message = ({ msg, bgColor }) => {
  let containerStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center' // Ajusta según sea necesario
  };

  let messageStyles = {
    padding: '1rem',
    marginBottom: '1rem',
    textAlign: 'center',
    backgroundColor: bgColor,
    color: '#fff',
    fontWeight: 'bold',
  };

  return (
    <div style={containerStyles}>
      <div style={messageStyles}>
        <p>{msg}</p>
      </div>
    </div>
  );
};

