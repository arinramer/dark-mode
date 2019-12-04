import React from 'react';
import useDarkMode from '../hooks/useDarkMode';

const Navbar = () => {
  const [storedValue, setValue] = useDarkMode();
  const toggleMode = e => {
    e.preventDefault();
    setValue(!storedValue);
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={storedValue ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
