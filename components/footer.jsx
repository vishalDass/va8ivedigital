import React, { Component } from "react";

class AppFooter extends Component {
  state = {};
  render() {
    return (
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <div className="row">
                <div className="col-md-3">
                  <h2 className="footer-heading mb-4">Quick Links</h2>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Services</a>
                    </li>
                    <li>
                      <a href="#">Testimonials</a>
                    </li>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-3">
                  <h2 className="footer-heading mb-4">Products</h2>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Services</a>
                    </li>
                    <li>
                      <a href="#">Testimonials</a>
                    </li>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-3">
                  <h2 className="footer-heading mb-4">Features</h2>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Services</a>
                    </li>
                    <li>
                      <a href="#">Testimonials</a>
                    </li>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-3">
                  <h2 className="footer-heading mb-4">Follow Us</h2>
                  <a href="#" className="pl-0 pr-3">
                    <span className="icon-facebook"></span>
                  </a>
                  <a href="#" className="pl-3 pr-3">
                    <span className="icon-twitter"></span>
                  </a>
                  <a href="#" className="pl-3 pr-3">
                    <span className="icon-instagram"></span>
                  </a>
                  <a href="#" className="pl-3 pr-3">
                    <span className="icon-linkedin"></span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <h2 className="footer-heading mb-4">Subscribe Newsletter</h2>
              <form action="#" method="post">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control border-secondary text-white bg-transparent"
                    placeholder="Enter Email"
                    aria-label="Enter Email"
                    aria-describedby="button-addon2"
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-primary text-white"
                      type="button"
                      id="button-addon2"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="row pt-5 mt-5 text-center">
            <div className="col-md-12">
              <div className="border-top pt-5">
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default AppFooter;
