import "./App.css";
import About from "./components/About";
// import CreateUser from './components/CreateUser';
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideBar from "./components/User/SideBar";
import { SideBarData } from "./components/Data/SideBarData";
import React from "react";
import Summary from "./components/Summary";
import { ToastContainer } from "react-toastify";
import Reports from "./components/Merge/Reports";
import Dispatch from "./components/Merge/Dispatch";


function App() {
  const mode = "dark";

  const UserRoutes = SideBarData.map((val) => {
    const Component = val.title;
    return (
      <Route
        key={val.link}
        exact
        path={val.link}
        element={React.createElement(Component)}
      />
    );
  });

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div className="singlePage">
                
                <Login />
              </div>
            }
          />
          <Route exact path="/about" element={<About />} />
          <Route
            exact
            path="/user/report"
            element={
              <>
                <Navbar mode={mode} />
                <Reports />
              </>
            }
          />
          <Route
            exact
            path="/user/projections"
            element={
              <>
                <Navbar mode={mode} />
                <SideBar mode={mode} />
                <div>
                  <Summary />
                </div>
              </>
            }
          />
          <Route
            exact
            path="/user/dispatch"
            element={
              <>
                <Navbar mode={mode} />
                <SideBar mode={mode} />
                <Dispatch />
              </>
            }
          />
          <Route
            exact
            path="/user"
            element={
              <div className="singlePage">
                <Navbar mode={mode} />
                <SideBar mode={mode} />
              </div>
            }
          >
            <Route>{UserRoutes}</Route>
          </Route>
         
          <Route exact
            path="/home"
            element={
              <div className="singlePage">
                <Navbar mode={mode} />
                <SideBar mode={mode} />
              </div>
            } />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
        <ToastContainer pauseOnHover="false" autoClose={1500} />
      </BrowserRouter>
    </>
  );
}

export default App;
