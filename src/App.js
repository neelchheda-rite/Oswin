import './App.css';
import About from './components/About';
// import CreateUser from './components/CreateUser';
import Login from './components/Login';
import Navbar from './components/Navbar';
import UserNavbar from './components/User/Navbar';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SideBar from './components/User/SideBar';
import { SideBarData } from './components/Data/SideBarData';


function App() {
    const mode='dark'
    const routes = SideBarData.map((val) => {
        return (
            <Route  exact path={val.link} element={<val.title />} />
        );
    });
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/"
                        element={
                            <>
                                <Navbar mode={mode}/>
                                <Login/>
                            </>
                        }/>
                    
                    <Route exact path="/about"
                        element={<About/>}/>
                    <Route exact path="/user"
                        element={
                        <> 
                        <UserNavbar mode={mode} />
                        <SideBar mode={mode} />
                        </>
                        }>
                        <Route>{routes}</Route>  
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
