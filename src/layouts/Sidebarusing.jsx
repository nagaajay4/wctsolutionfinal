import React, { useState } from 'react';
import Sidebar from './Sidebar'; // Adjust the import path

const Sidebarusing = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      {/* Your main content */}
      <p>Content myyyyyyyyyyyyyyyyyyyyyy</p>
      <button onClick={handleSidebarToggle}>Toggle Sidebar</button>
      <Sidebar isOpen={isSidebarOpen} onClose={handleSidebarToggle} />
    </div>
  );
};

export default Sidebarusing;
