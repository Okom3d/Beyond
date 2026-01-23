import React, { useState } from 'react';
import { Input } from './ui/input';

export const LandingPage = () => {
  const [code, setCode] = useState('');

  const handleCodeChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 6);
    setCode(value);
  };

  return (
    <div className="landing-container">
      <div className="landing-content">
        <h1 className="brand-name">BEYOND</h1>
        <p className="location">ANTWERP</p>
        
        <div className="access-code-container">
          <Input
            type="text"
            value={code}
            onChange={handleCodeChange}
            placeholder="000000"
            className="access-code-input"
            maxLength={6}
          />
        </div>
      </div>
      
      <footer className="landing-footer">
        <p className="exclusivity-text">You were either invited, or you were not</p>
      </footer>
    </div>
  );
};

export default LandingPage;