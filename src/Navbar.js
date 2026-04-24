import React from "react";
import "./App.css";

function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg bg-light border-bottom py-3">
            <div className="container">
              <a className="navbar-brand d-flex align-items-center fw-bold" href="#">
                <span className="logo me-2 rounded-circle d-flex align-items-center justify-content-center"></span>
                Nebula AI</a>
            </div>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarcontent" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarcontent">
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0 text-center">
                    <li className="nav-item">
                          <a className="nav-link px-3 text-muted" href="#">Platform</a>
                    </li>
                    <li className="nav-item">
                          <a className="nav-link px-3 text-muted" href="#">Use cases</a>
                    </li>
                    <li className="nav-item">
                          <a className="nav-link px-3 text-muted" href="#">Pricing</a>
                    </li>
                    <li className="nav-item">
                          <a className="nav-link px-3 text-muted" href="#">Resources</a>
                    </li>
                </ul>
            </div>

            <div className="d-flex gap-2">
                <button className="btn btn-light ">Contact Sales</button>
                <button className="btn btn-primary">Sign Up Free</button>
            </div>
        </nav>
    );

}
export default Navbar;