import './App.css';
import About from './components/About';
// import CreateUser from './components/CreateUser';
import Login from './components/Login';
import Navbar from './components/Navbar';
import UserNavbar from './components/User/Navbar';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SideBar from './components/User/SideBar';
import { SideBarData } from './components/Data/SideBarData';
import React from 'react';
import Summary from './components/Summary';


function App() {
  const mode = 'dark';

  const UserRoutes = SideBarData.map((val) => {
    const Component = val.title;
    return (
      <Route key={val.link} exact path={val.link} element={React.createElement(Component)} />
    );
  });

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<><Navbar mode={mode} /><Login /></>} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/user" element={<><UserNavbar mode={mode} /><SideBar mode={mode} /></>}>
            <Route>{UserRoutes}</Route>
          </Route>
            <Route exact path='/test/summary' element={<><UserNavbar mode={mode} /><Summary /></>} />+
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}


export default App;
