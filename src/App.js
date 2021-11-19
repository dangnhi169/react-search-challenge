import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ProfilePage from 'components/ProfilePage';
import HomePage from 'components/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="profile/:id" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
