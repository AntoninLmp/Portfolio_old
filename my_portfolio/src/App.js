import React from 'react';
import { BrowserRouter, Routes, Route }
  from 'react-router-dom';
import MainPage from './components/MainPage';
import CarrerPath from './components/professionalExperience/CarrerPath';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<MainPage />} />
          <Route path={"/parcoursProfessionnel"} element={<CarrerPath />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
