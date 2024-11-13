import React, { useState, useEffect } from 'react';

const RandomColor = () => {
  const [color, setColor] = useState('#ffffff'); 

  useEffect(() => {
    const getRandomColor = () => {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    };

    const interval = setInterval(() => {
      const newColor = getRandomColor();
      setColor(newColor); 
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      style={{
        width: '15em',
        backgroundColor: color,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        fontSize: '2rem',
        fontWeight: 'bold'
      }}
    >
      <h1>Random Color</h1>
    </div>
  );
};

export default RandomColor;
