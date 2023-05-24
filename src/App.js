import "./App.css";
import About from "./components/About";
// import CreateUser from './components/CreateUser';
import Login from "./components/Login";
// import Navbar from "./components/Navbar";
import TopBar from "./components/topbar/Topbar"
import {BrowserRouter, Route, Routes} from "react-router-dom";
// import SideBar from "./components/User/SideBar";
import SideBar from "./components/sidebar/Sidebar";
import UserList from "./components/userList/UserList"
import React from "react";
import Summary from "./components/Summary";
import {ToastContainer} from "react-toastify";
import Reports from "./components/Merge/Reports";
import Dispatch from "./components/Merge/Dispatch";


function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/'
                        element={
                            <>
                            
                            <Login/>
                            </>
                        }/>

                    <Route exact path="/user"
                        element={
                            <>
                            <TopBar />
                            <SideBar />
                            <UserList/>
                            </>
                        }/>
                </Routes>

            </BrowserRouter>
        </>
    );
}

export default App;
