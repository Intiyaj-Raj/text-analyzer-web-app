import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/text-analyze.png';

const Navbar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <div className="container-fluid">

                    {/* Logo */}
                    <Link className="navbar-brand fw-bold" to="/">
                        <img
                            src={logo}
                            alt="logo"
                            className="px-2"
                            style={{ height: "40px", objectFit: "contain" }}
                        />
                        TA
                    </Link>

                    {/* Nav Links */}
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">

                            <li className="nav-item">
                                <Link className="nav-link active" to="/">
                                    Home
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/about">
                                    About
                                </Link>
                            </li>

                        </ul>
                    </div>

                    {/* Toggle btn */}
                    <div className="form-check form-switch">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            role="switch"
                            id="switchCheckDefault"

                        />
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;