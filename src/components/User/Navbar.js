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
                    <Link className="navbar-brand me-2 " to="/"
                        style={
                            {color: '#3299bc'}
                    }>
                        <strong>{
                            props.title
                        }</strong>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/user/projects">
                                    {
                                    props.projects
                                }</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link" aria-current="page" to="/user/report">
                                    {
                                    props.report
                                } </Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link" aria-current="page" to="/user/projections">
                                    {
                                    props.projections
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
    projects: PropTypes.string,
    report: PropTypes.string,
    projections: PropTypes.string
}

Navbar.defaultProps = {
    title: "Oswin",
    projects: "Projects",
    report: "Report",
    projections: "Projections"
}
