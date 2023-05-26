import React from 'react';
import ReactDOM from 'react-dom/client'; //HANDLING DOM(DOCUMENT OBJECT MODULE ELEMENTS)
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import "./assets/scss/style.scss"; // GLOBAL CSS FILE USING SCSS
import { ToastContainer} from 'react-toastify'; //TOAST CONTAINER TO DISPLAY THEW TOAST NOTIFICATION


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render (
    <BrowserRouter>
        <React.StrictMode>
                <App/>
        </React.StrictMode>
        <ToastContainer autoClose={1500} pauseOnFocusLoss={ true} /> {/* Autoclose is set to 1500 ms and PauseonFocusLoss means that the timer wont stop if the toast is hovered */}
    </BrowserRouter>
    );

reportWebVitals();
