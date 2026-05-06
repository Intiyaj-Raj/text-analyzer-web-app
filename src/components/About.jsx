import React from "react";

const About = (props) => {
    return (
        <main
            style={{
                backgroundColor: props.mode === "dark" ? "#121212" : "#f8f9fa",
                color: props.mode === "dark" ? "white" : "black",
                minHeight: "100vh",
            }}
        >
            {/* Header */}
            <div className="text-center pt-5 my-5">
                <div className="container">
                    <h1 className="display-4 fw-bold">About Text Analyzer</h1>
                    <p className="lead">
                        A simple tool to analyze and improve your text instantly.
                    </p>
                </div>
            </div>


            <div className="container pb-5">
                <div className="row g-4">

                    <div className="col-md-6">
                        <div className={`card shadow-sm border border-light p-4 h-100 bg-${props.mode === "light" ? "info-subtle" : "secondary"} bg-opacity-75 text-${props.mode === "light" ? "dark" : "light"}`}>
                            <h4>What is this app?</h4>
                            <p style={{ textAlign: "justify" }}>
                                Text Analyzer is a web app that helps you quickly analyze your
                                text. You can count words, characters, and estimate reading
                                time. It also provides useful tools to format your text easily.
                            </p>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className={`card shadow-sm border border-light p-4 h-100 bg-${props.mode === "light" ? "info-subtle" : "secondary"} bg-opacity-75 text-${props.mode === "light" ? "dark" : "light"}`}>
                            <h4>Why use it?</h4>
                            <p style={{ textAlign: "justify" }}>
                                This app is fast, simple, and user-friendly. It saves time and
                                helps you improve your text instantly without any complexity.
                            </p>
                        </div>
                    </div>

                </div>


                <div className="row g-4 mt-3">

                    <div className="col-md-4">
                        <div className={`card shadow-sm border border-light p-4 h-100 bg-${props.mode === "light" ? "info-subtle" : "secondary"} bg-opacity-75 text-${props.mode === "light" ? "dark" : "light"}`}>
                            <h5 className={`text-${props.mode === "light" ? "info" : "warning"}`}>
                                Uppercase / Lowercase
                            </h5>
                            <p>Convert text easily in one click.</p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className={`card shadow-sm border border-light p-4 h-100 bg-${props.mode === "light" ? "info-subtle" : "secondary"} bg-opacity-75 text-${props.mode === "light" ? "dark" : "light"}`}>
                            <h5 className={`text-${props.mode === "light" ? "info" : "warning"}`}>
                                Clean Text
                            </h5>
                            <p>Remove extra spaces and format text.</p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className={`card shadow-sm border border-light p-4 h-100 bg-${props.mode === "light" ? "info-subtle" : "secondary"} bg-opacity-75 text-${props.mode === "light" ? "dark" : "light"}`}>
                            <h5 className={`text-${props.mode === "light" ? "info" : "warning"}`}>
                                Copy & Use
                            </h5>
                            <p>Copy text quickly and use anywhere.</p>
                        </div>
                    </div>

                </div>
            </div>


            <div className="container pb-5">
                <div className="row g-4">


                    <div className="col-md-4">
                        <div className={`card shadow-sm border border-light p-4 h-100 bg-${props.mode === "light" ? "info-subtle" : "secondary"} bg-opacity-75 text-${props.mode === "light" ? "dark" : "light"}`}>
                            <h5 className={`text-${props.mode === "light" ? "info" : "warning"}`}>
                                Your Text Summary
                            </h5>
                            <p className="mb-1">Check word count, characters, and reading time instantly.</p>

                        </div>
                    </div>


                    <div className="col-md-8">
                        <div className={`card shadow-sm border border-light p-4 h-100 bg-${props.mode === "light" ? "info-subtle" : "secondary"} bg-opacity-75 text-${props.mode === "light" ? "dark" : "light"}`}>
                            <h5 className={`text-${props.mode === "light" ? "info" : "warning"}`}>
                                Text Preview
                            </h5>
                            <p style={{ textAlign: "justify" }}>
                                Your text will appear here...
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            <div className="container pb-5">
                <div className={`card shadow-sm border border-light p-4 text-center bg-${props.mode === "light" ? "success-subtle" : "danger-subtle"}`}>
                    <h5 className={`text-${props.mode === "light" ? "info" : "warning"}`}>
                        Text Actions
                    </h5>

                    <div className="d-flex flex-wrap justify-content-center gap-2 mt-3">
                        <button className="btn btn-outline-secondary">Uppercase</button>
                        <button className="btn btn-outline-secondary">Lowercase</button>
                        <button className="btn btn-outline-secondary">Capitalize</button>
                        <button className="btn btn-outline-danger">Clear</button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default About;