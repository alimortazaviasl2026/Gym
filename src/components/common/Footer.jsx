import React from 'react'

function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-3">
      <div className="container">
        <div className="row g-4">

          <div className="col-lg-4 col-md-6">
            <h3 className="fw-bold text-warning">POWER GYM</h3>
            <p className="text-secondary mt-3">
              A professional fitness club with modern equipment and
              experienced trainers. We are here to help you become
              the best version of yourself.
            </p>
          </div>

          <div className="col-lg-2 col-md-6">
            <h5 className="text-warning mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Trainers
                </a>
              </li>
              <li>
                <a href="#" className="text-light text-decoration-none">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h5 className="text-warning mb-3">Opening Hours</h5>
            <p className="mb-1">Saturday - Wednesday: 06:00 - 23:00</p>
            <p className="mb-1">Thursday: 06:00 - 22:00</p>
            <p>Friday: 08:00 - 20:00</p>
          </div>

          <div className="col-lg-3 col-md-6">
            <h5 className="text-warning mb-3">Contact Us</h5>
            <p>📍 Tehran, Example Street</p>
            <p>📞 +98 912 123 4567</p>
            <p>✉️ info@powergym.com</p>

            <div className="mt-3">
              <a href="#" className="btn btn-warning btn-sm me-2">
                Instagram
              </a>

              <a href="#" className="btn btn-outline-warning btn-sm">
                Telegram
              </a>
            </div>
          </div>

        </div>

        <hr />

        <div className="text-center text-secondary">
          © 2026 POWER GYM | All Rights Reserved.
        </div>

      </div>
    </footer>
  )
}

export default Footer
