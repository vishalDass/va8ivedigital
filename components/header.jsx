import React, { Component } from "react";

class AppHeader extends Component {
  state = {};
  render() {
    const styling = {
      position: "relative; top: 3px"
    };
    return (
      <div className="site-wrap">
        <div className="site-mobile-menu">
          <div className="site-mobile-menu-header">
            <div className="site-mobile-menu-close mt-3">
              <span className="icon-close2 js-menu-toggle"></span>
            </div>
          </div>
          <div className="site-mobile-menu-body"></div>
        </div>

        <header className="site-navbar py-2 bg-white" role="banner">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-11 col-xl-2">
                <h1 className="mb-0 site-logo">
                  <a href="index.html" className="text-black h2 mb-0">
                    Listed
                  </a>
                </h1>
              </div>
              <div className="col-12 col-md-10 d-none d-xl-block">
                <nav
                  className="site-navigation position-relative text-right"
                  role="navigation"
                >
                  <ul className="site-menu js-clone-nav mr-auto d-none d-lg-block">
                    <li className="active">
                      <a href="index.html">
                        <span>Home</span>
                      </a>
                    </li>
                    <li>
                      <a href="listings.html">
                        <span>Listings</span>
                      </a>
                    </li>
                    <li className="has-children">
                      <a href="about.html">
                        <span>About</span>
                      </a>
                      <ul className="dropdown">
                        <li>
                          <a href="#">The Company</a>
                        </li>
                        <li>
                          <a href="#">The Leadership</a>
                        </li>
                        <li>
                          <a href="#">Philosophy</a>
                        </li>
                        <li>
                          <a href="#">Careers</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="blog.html">
                        <span>Blog</span>
                      </a>
                    </li>
                    <li>
                      <a href="contact.html">
                        <span>Contact</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              <div
                className="d-inline-block d-xl-none ml-md-0 mr-auto py-3"
                style={styling}
              >
                <a
                  href="#"
                  className="site-menu-toggle js-menu-toggle text-black"
                >
                  <span className="icon-menu h3"></span>
                </a>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default AppHeader;
