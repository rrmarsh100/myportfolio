import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import avatar from "../images/avatar.png";

class LandingPage extends Component {
  render() {
    return (
      <div className="landing-grid">
        <Row>
          <Col>
            <img src={avatar} alt="avatar" className="avatar-img" />

            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>

              <hr />

              <p>
                HTML/CSS | Bootstrap | JavaScript | React | NodeJS | Express |
                MongoDB
              </p>
              <div className="social-links">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/robertmarsh100/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/* Github */}
                <a
                  href="https://github.com/rrmarsh100"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default LandingPage;
