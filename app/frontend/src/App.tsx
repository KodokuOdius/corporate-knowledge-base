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
import NewProfile from './components/NewProfile/NewProfile';
import EditProfile from './components/EditProfille/EditProfile';
import FileWorker from './components/FileWorker/FileWorker';
import FileAdmin from './components/FileAdmin/FileAdmin';

const App: React.FC = () => {
  return (
    <div>
      <Routes >
        <Route path="/" element={< Main />}/>

        <Route path="/signUp" element={< SignUp />}/>
        <Route path="/registration" element={< Registration />}/>

        <Route path="/catalogWorker" element={< CatalogWorker />}/>
        <Route path="/catalogAdmin" element={< CatalogAdmin />}/>

        <Route path='/fileWorker' element={<FileWorker />}/>
        <Route path='/fileAdmin' element={<FileAdmin />}/>

        <Route path="/profileWorker" element={< ProfileWorker />}/>
        <Route path="/profileAdmin" element={< ProfileAdmin />}/>

        <Route path="/listWorker" element={< ListWorker />}/>
        <Route path="/newProfile" element={< NewProfile />}/>

        <Route path="/createProfile" element={< NewProfile />}/>
        <Route path="/editProfile" element={< EditProfile />}/>

      </Routes>

    </div>
  );
}

export default App;
