import { Routes, Route } from 'react-router-dom';

import Home from '../../routes/Home';
import Upload from '../../routes/Upload';
import Wedding from '../../routes/Wedding';

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/subir' element={<Upload />} />
      <Route path='/boda' element={<Wedding />} />
    </Routes>
  );
};

export default AppRouter;
