import React from 'react';
import { BrowserRouter, Routes, Route }
  from 'react-router-dom';
  import MainStart from './components/Home/MainStart';
  import Main from './components/Home/Main';
import CarrerPath from './components/Page_Carrer/CarrerPath';
import PersonalPage from './components/Page_Personnal/PersonalPage';
import Study from './components/Page_Study/Study';
import Project from './components/Page_Project/Project';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<MainStart/>} />
          <Route path={"/Home"} element={<Main/>} />
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
