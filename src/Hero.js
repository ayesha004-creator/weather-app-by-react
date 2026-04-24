import React from "react";

function Hero() {
  return (
    <div className="container py-5">

      <div className="row align-items-center g-5">

        {/* LEFT SIDE */}
        <div className="col-lg-8">

          <span className="badge bg-primary-subtle text-primary px-3 py-2 mb-3">
            AI chatbot SaaS for business websites
          </span>

          <h1 className="fw-bold display-5">
            Launch an <span className="text-primary">AI assistant</span><br />
            trained on your website<br /> and FAQs.
          </h1>

          <p className="text-muted mt-3">
            A simple SaaS platform for startups and small businesses to create,
            deploy, and manage an AI chatbot.
          </p>

          {/* Buttons */}
          <div className="mt-4">
            <button className="btn btn-primary me-3 px-4 py-2">
              Start free trial
            </button>
            <button className="btn btn-outline-secondary px-4 py-2">
              Book a demo
            </button>
          </div>

          {/* Small Features */}
          <div className="d-flex flex-wrap gap-3 mt-4 text-muted small">
            <span className="border rounded-pill px-3 py-1">
               Train from website content
            </span>
            <span className="border rounded-pill px-3 py-1">
               Deploy with one code
            </span>
            <span className="border rounded-pill px-3 py-1">
               Track queries
            </span>
          </div>

          {/* Bottom Cards */}
          <div className="row mt-5 g-3">
            <div className="col-md-4">
              <div className="p-3 border rounded-4 h-100">
                <h6 className="fw-bold">24/7 replies</h6>
                <p className="text-muted small">
                  Answer questions anytime without extra support.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-3 border rounded-4 h-100">
                <h6 className="fw-bold">Easy setup</h6>
                <p className="text-muted small">
                  Upload content and go live quickly.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-3 border rounded-4 h-100">
                <h6 className="fw-bold">Clear analytics</h6>
                <p className="text-muted small">
                  Track and improve responses easily.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* RIGHT SIDE (LOGIN CARD) */}
        <div className="col-lg-4">

          <div className="card shadow-sm border-0 rounded-4 p-4">

            <span className="badge bg-primary-subtle text-primary px-3 py-2 mb-3">
             Secure workspace access
            </span>

            <h4 className="fw-bold">Welcome back</h4>

            <p className="text-muted small">
              Sign in to manage your chatbot and analytics.
            </p>

            {/* Email */}
            <div className="mb-3">
              <label className="form-label small">Email</label>
              <input
                type="email"
                className="form-control rounded-3"
                placeholder="name@company.com"
              />
            </div>

            {/* Password */}
            <div className="mb-3">
              <label className="form-label small d-flex justify-content-between">
                Password
                <a href="#" className="small">Forgot password?</a>
              </label>
              <input
                type="password"
                className="form-control rounded-3"
                placeholder="********"
              />
            </div>

            {/* Button */}
            <button className="btn btn-primary w-100 py-2">
              Log In to Dashboard
            </button>

            {/* Divider */}
            <div className="text-center my-3 text-muted small">
             or continue with
            </div>

            {/* Social Buttons */}
            <div className="d-flex gap-2">
              <button className="btn btn-outline-secondary w-50">
                GitHub
              </button>
              <button className="btn btn-outline-secondary w-50">
                Google
              </button>
            </div>

            {/* Signup */}
            <div className="bg-light p-3 rounded-3 mt-4 text-center">
              <p className="mb-1 small">New here?</p>
              <button className="btn btn-outline-primary btn-sm">
                Sign Up
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Hero;

