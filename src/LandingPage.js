import React from "react";

function LandingPage() {
    return (

        <div className="container py-5">

            {/*  section 1 */}
            <div className="text-center mb-5">
                <span className="badge bg-primary-subtle text-primary px-3 py-2 mb-3">core features</span>
                <h1 className="fw-bold">Everything needed to create and manage a support chatbot</h1>
                <p className="text-muted">Clear tools for training, deployment, and analytics without complexity.</p>
            </div>

            <div className="row g-4 mb-5">

                {["Train on your own content",
                    "Deploy on any business wensite",
                    "See what customers ask most"
                ].map((title, i) => (
                    <div className="col-md-4" key={i}>
                        <div className="card shadow-sm h-100 border-0 rounded-4">
                            <div className="card-body">
                                <h5 className="fe-semibold">{title}</h5>
                                <p className="text-muted">Upload content and improve chatbot responses easily.</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* section 2 */}

            <div className="text-center mb-5">

                <span className="badge bg-primary-subtle text-primary px-3 py-2 mb-3">How it works</span>
                <h1 className="fw-bold">A simple setup for small teams.</h1>
                <p className="text-muted">From content upload to live chatbot in three steps.</p>
            </div>

            <div className="row g-4 mb-5">

                {[" Upload your support content",
                    "Train and review responses",
                    "Embed and go live"
                ].map((step, i) => (
                    <div className="col-md-4" key={i}>
                        <div className="card shadow-sm h-100 border-0 rounded-4">
                            <div className="card-body">
                                <h5 className="fe-semibold">{i + 1}.{step}</h5>
                                <p className="text-muted">simple and quick process for chatbot setup.</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/*  stats */}

            <div className="row text-center mb-5">
                <div className="col-md-4 mb-3">
                    <h2 className="fw-bold">24/7</h2>
                    <h5>customer support coverage</h5>
                    <p className="text-muted">Give visitors instant answers even outside business hours.</p>
                </div>
                <div className="col-md-4 mb-3">
                    <h2 className="fw-bold">one code</h2>
                    <h5>Fast deployment</h5>
                    <p className="text-muted">Install the chatbot with a lightweight embed snippet.</p>
                </div>
                <div className="col-md-4 mb-3">
                    <h2 className="fw-bold">one view</h2>
                    <h5>Analytics dashboard</h5>
                    <p className="text-muted">Monitor common questions and improve weak answers over time.</p>
                </div>
            </div>

            {/* section 3 */}
            <div className="text-center mb-5">
                <span className="badge bg-primary-subtle text-primary px-3 py-2 mb-3">
                    Use cases
                </span>

                <h1 className="fw-bold">
                    Made for startups and small businesses.
                </h1>

                <p className="text-muted">
                    A practical assistant for customer support and FAQs.
                </p>
            </div>

            <div className="row g-4 mb-5">
                <div className="col-md-6">
                    <div className="card border-0 shadow-sm h-100 rounded-4">
                        <div className="card-body">
                            <h5 className="fw-semibold">
                                Reduce repetitive customer support work
                            </h5>
                            <p className="text-muted">
                                Let chatbot answer common questions automatically.
                            </p>
                            <div className="bg-light rounded-3 mt-3" style={{ height: "150px" }}></div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card border-0 shadow-sm h-100 rounded-4">
                        <div className="card-body">
                            <h5 className="fw-semibold">
                                Learn what customers still need help with
                            </h5>
                            <p className="text-muted">
                                Use analytics to improve content and answers.
                            </p>
                            <div className="bg-light rounded-3 mt-3" style={{ height: "150px" }}></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="p-4 rounded-4 d-flex flex-column flex-md-row justify-content-between align-items-center"
                style={{ background: "#e7f0ff" }}
            >
                <div>
                    <h4 className="fw-bold">Add AI support to your website.</h4>
                    <p className="text-muted mb-0">
                        Train the chatbot and embed it easily.
                    </p>
                </div>

                <div className="mt-3 mt-md-0">
                    <button className="btn btn-primary me-2">
                        Create your assistant
                    </button>
                    <button className="btn btn-outline-secondary">
                        Talk to sales
                    </button>
                </div>
            </div>

        </div>



    );
}
export default LandingPage;
