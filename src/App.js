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
import Testing from './components/Testing';
import { ToastContainer } from 'react-toastify';


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
          <Route exact path="/" element={<div className='singlePage' ><Navbar mode={mode} /><Login /></div>} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/user" element={<div className='singlePage'><UserNavbar mode={mode} /><SideBar mode={mode} /></div>}>
            <Route>{UserRoutes}</Route>
          </Route>
            <Route exact path='/test/summary' element={<><UserNavbar mode={mode} /><Summary /></>} />
            <Route exact path='/testing' element={<><Testing /></>} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
        <ToastContainer  autoClose={2000}/>
      </BrowserRouter>
    </>
  );
}


export default App;
