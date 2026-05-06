import React from "react";
import { Link } from "react-router-dom";

const Footer = (props) => {
    return (
        <footer
            className={`py-4 mt-5 text-center bg-${props.mode === "light" ? "light" : "dark"
                } text-${props.mode === "light" ? "dark" : "light"}  border border-top border-dark`}
        >
            <div className="container">

                <h5 className="fw-bold mb-2">Text Analyzer</h5>

                <p className="mb-2">
                    Analyze your text easily — word count, reading time, formatting & more.
                </p>

                <p className="mb-1">
                    Built with ❤️ by
                    <Link className="ms-2" to={"https://intiyajansarifullstackdeveloper.netlify.app/"}>Intiyaj Ansari</Link>
                </p>


                <small>
                    © 2026 Text Analyzer. All rights reserved.
                </small>


            </div>
        </footer>
    );
};

export default Footer;