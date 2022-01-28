import './App.css';

import {BrowserRouter, Routes, Route } from 'react-router-dom'
import MainContext from './cotexts/MainContext';
import { useState } from 'react';
import Mainpage from './Pages/MainPage';
import RegistrationPage from './Pages/RegistrationPage'
import Loginpage from './Pages/LoginPage';
import Toolbar from './components/ToolBar';
import Createpostpage from './Pages/CreatePostPage';



function App() {
  const [getUsers, setUsers] = useState([])
  const [getCurrentUser, setCurrentUser] = useState(null)
  const [getCurrentPage, setCurrentPage] = useState("")
  const [getPosts, setPosts] = useState([])



  return (


    <MainContext.Provider value={{getUsers, setUsers, setCurrentUser, getCurrentUser, getPosts, setPosts}}>
      
      <BrowserRouter> 
      
      <Toolbar user={getCurrentUser} page={getCurrentPage}/>

      <Routes>

      <Route path='/register' element={<RegistrationPage setCurrentPage={setCurrentPage} />}/>
      
      <Route path='/main' element={<Mainpage setCurrentPage={setCurrentPage} posts={getPosts}/>}/>

      <Route path='/login' element={<Loginpage setCurrentPage={setCurrentPage}/>}/>
      
      <Route path='/createpost' element={<Createpostpage setCurrentPage={setCurrentPage}/>}/>

      </Routes>

      </BrowserRouter>
      
      </MainContext.Provider>

  );
}

export default App;
