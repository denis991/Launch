import React from 'react';
import { Route, Routes } from 'react-router-dom';

function MainPages() {
  return (
    <Routes>
      <Route path="/" element={<p>sa</p>} />
      <Route path="/resumes" element={<p>sa</p>} />
      <Route path="/" element={<p>sa</p>} />
      <Route path="/fav" element={<p>sa</p>} />
    </Routes>
  );
}

export default MainPages;
