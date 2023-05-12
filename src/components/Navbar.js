import React from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


export default function Navbar(props) {
    return (
        <div>
            <nav className={
                `navbar navbar-expand-lg navbar-${
                    props.mode
                } bg-${
                    props.mode
                }`
            }>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"
                        // style={{color: '#3299bc'}}>
                        style={{color: '#1976d2'}}>
                        <strong>{
                        props.title
                    }</strong></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">
                                    {
                                    props.home
                                }</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link" aria-current="page" to="/about">
                                    {
                                    props.about
                                } </Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}

Navbar.propTypes = {
    title: PropTypes.string,
    home: PropTypes.string,
    about: PropTypes.string,
    login: PropTypes.string
}

Navbar.defaultProps = {
    title: "Oswin",
    home: "Home",
    about: "About",
    login: "Login"
}
