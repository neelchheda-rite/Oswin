import './App.css';
import About from './components/About';
import CreateUser from './components/CreateUser';
import Login from './components/Login';
import Navbar from './components/Navbar';
import {BrowserRouter, Route, Routes} from "react-router-dom";


function App() {


    return (
        <>
            <BrowserRouter>
                <Navbar mode={'dark'}/>
                <Routes>
                    <Route exact path="/"
                        element={<Login/>}/>
                    <Route exact path="/create-user"
                        element={
                            <div
                        className='container my-3'><CreateUser/></div>
                        }/>
                    <Route exact path="/about"
                        element={<About/>}/>
                </Routes>

            </BrowserRouter>
        </>
    );
}

export default App;
