import './App.css';
import About from './components/About';
import CreateUser from './components/CreateUser';
import Login from './components/Login';
import Navbar from './components/Navbar';
import UserNavbar from './components/User/Navbar';
import {BrowserRouter, Route, Routes} from "react-router-dom";


function App() {


    return (
        <>
            <BrowserRouter>

                <Routes>
                    {/* <Navbar mode={'dark'}/> */}
                    <Route exact path="/"
                        element={
                            <>
                                <Navbar mode={'dark'}/>
                                <Login/>
                            </>
                        }/>
                    {/* <Route exact path="/create-user"
                        element={
                            <>
                            <Navbar mode={'dark'}/>
                            <div
                        className='container my-3'><CreateUser/></div>
                        </>
                        }/> */}
                    <Route exact path="/about"
                        element={<About/>}/>
                    <Route exact path="/user"
                        element={<UserNavbar mode={'dark'}/>}/>
                </Routes>

            </BrowserRouter>
        </>
    );
}

export default App;
