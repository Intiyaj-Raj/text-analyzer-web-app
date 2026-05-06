import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/text-analyze.png';

const Navbar = (props) => {
    return (
        <header>
            <nav className={`navbar navbar-expand-md navbar-${props.mode} bg-${props.mode} fixed-top border-bottom border-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <div className="container-fluid">

                    {/* Logo */}
                    <Link className="navbar-brand fw-bold fst-italic me-5" to="/">
                        <img
                            src={logo}
                            alt="logo"
                            className="px-2"
                            style={{ height: "40px" }}
                        />
                        Text Analyzer
                    </Link>

                    {/* Menu Toggle Button */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    <div className="collapse navbar-collapse" id="navbarCollapse">


                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">Home</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                        </ul>

                        {/* Toggle Button */}
                        <div className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"} ms-md-3`}>
                            <input
                                className="form-check-input"
                                onClick={props.toggleMode}
                                type="checkbox"
                                id="switchCheckDefault"
                                style={{ cursor: "pointer" }}
                            />
                            <label className="form-check-label" htmlFor="switchCheckDefault">
                                Dark Mode
                            </label>
                        </div>

                    </div>

                </div>
            </nav>
        </header>
    );
};

export default Navbar;