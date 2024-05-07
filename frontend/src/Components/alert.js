import React, { useState, useEffect } from 'react';

const AlertComponent = ({ message }) => {
  const [alerting, setAlerting] = useState(false);

  useEffect(() => {
    if (alerting) {
      // Play sound
      const audio = new Audio('../Images/alert.mp3');
      audio.play();

      // Show alert box
      alert(message);

      // Reset alert state after 5 seconds
      const timeout = setTimeout(() => {
        setAlerting(false);
      }, 5000);

      return () => clearTimeout(timeout);
    }
  }, [alerting, message]);

  const handleAlert = () => {
    setAlerting(true);
  };

  return (
    <button onClick={handleAlert}>Show Alert</button>
  );
};

export default AlertComponent;
