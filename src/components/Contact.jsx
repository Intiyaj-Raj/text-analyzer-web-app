import React from "react";

const Contact = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Form submitted 👍");
        e.target.reset();
    };

    return (
        <div className="container py-5">

            <h2 className="text-center fw-bold mb-4">
                Contact Us
            </h2>

            <div className="row justify-content-center">
                <div className="col-md-6">


                    <div className="card shadow-lg border-0 rounded-4 p-4 bg-light">

                        <form onSubmit={handleSubmit}>

                            <input
                                type="text"
                                className="form-control mb-3"
                                placeholder="Your Name"
                                required
                            />

                            <input
                                type="email"
                                className="form-control mb-3"
                                placeholder="Your Email"
                                required
                            />

                            <input
                                type="tel"
                                className="form-control mb-3"
                                placeholder="Mobile Number"
                                required
                            />

                            <textarea
                                className="form-control mb-3"
                                rows="2"
                                placeholder="Address"
                                required
                            ></textarea>

                            <textarea
                                className="form-control mb-3"
                                rows="4"
                                placeholder="Message"
                                required
                            ></textarea>

                            <button
                                type="submit"
                                className="btn btn-primary w-100 rounded-3 py-2"
                            >
                                Send Message
                            </button>

                        </form>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default Contact;