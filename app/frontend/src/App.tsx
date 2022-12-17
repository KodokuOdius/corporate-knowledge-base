import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignUp from './components/SignUp/SignUp';
import Main from './components/Main/Main';
import Registration from './components/Registration/Registration';
import CatalogWorker from './components/CatalogWorker/CatalogWorker';
import CatalogAdmin from './components/CatalogAdmin/Catalogadmin';
import ProfileWorker from './components/ProfileWorker/ProfileWorker';
import ProfileAdmin from './components/ProfileAdmin/ProfileAdmin';
import ListWorker from './components/ListWorker/ListWorker';

const App: React.FC = () => {
  return (
    <div>
      <Routes >
        <Route path="/" element={< Main />}/>

        <Route path="/signUp" element={< SignUp />}/>
        <Route path="/registration" element={< Registration />}/>

        <Route path="/catalogWorker" element={< CatalogWorker />}/>
        <Route path="/catalogAdmin" element={< CatalogAdmin />}/>

        <Route path="/profileWorker" element={< ProfileWorker />}/>
        <Route path="/profileAdmin" element={< ProfileAdmin />}/>

        <Route path="/listWorker" element={< ListWorker />}/>
      </Routes>

      <ProfileWorker />
      <ProfileAdmin />
      <ListWorker />

    </div>
  );
}

export default App;
