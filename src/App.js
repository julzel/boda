import React from 'react';
import { BrowserRouter as RouterDom, Routes, Route } from 'react-router-dom';

import Home from './routes/Home';
import Upload from './routes/Upload';
import Wedding from './routes/Wedding';
import Invite from './routes/Invite';

const App = () => {
  return (
    <RouterDom>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/subir' element={<Upload />} />
        <Route path='/boda' element={<Wedding />} />
        <Route path='/invitacion' element={<Invite />} />
      </Routes>
    </RouterDom>
  );
};

export default App;

