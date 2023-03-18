import React from 'react';
import { BrowserRouter, Routes, Route }
  from 'react-router-dom';
import MainPage from './components/Home/MainPage';
import CarrerPath from './components/Carrer/CarrerPath';
import PersonalPage from './components/AntoninLampin/PersonalPage';
import Study from './components/Study/Study';
import Project from './components/Project/Project';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<MainPage />} />
          <Route path={"/parcoursProfessionnel"} element={<CarrerPath />} />
          <Route path={"/AntoninLampin"} element={<PersonalPage />} />
          <Route path={"/Study"} element={<Study />} />
          <Route path={"/Project"} element={<Project />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
