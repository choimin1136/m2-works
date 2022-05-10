import { useState } from 'react';
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import Login_User from './layout/login/Login_user';
import Dashboard from './container/Dashboard';
import Topbar from './components/topbar/Topbar';
import Home from './layout/home/Home';
import Single from './layout/single/Single';
import New from './layout/new/New';
import List from './layout/list/List';

function App() {
  let [login, login_update] = useState(true)

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home/>}/>
            <Route path="login" element={<login/>}/>
            <Route path="users">
              <Route index element={<List/>}/>
              <Route path=":userEmail" element={<Single/>}/>
              <Route path="new" element={<New/>}/>
            </Route>
            <Route path="products">
              <Route index element={<List/>}/>
              <Route path=":productId" element={<Single/>}/>
              <Route path="new" element={<New/>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
