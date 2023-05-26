import './App.css';
import MainLayout from './components/MainLayout/MainLayout';
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Login from "./components/Login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';



function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={
          <PrivateRoute>
            <MainLayout />
          </PrivateRoute>
        } />
      </Routes>
      <Routes>
      <Route exact path="/login" element={<Login />} />
      </Routes>
      <ToastContainer position="top-right" pauseOnHover="false" autoClose={1500}/>
      </BrowserRouter>
    </>
  );
}

export default App;
