import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import avatar from "../images/avatar.png";

class LandingPage extends Component {
  render() {
    return (
      <div className="landing-grid">
        <Row>
          <Col>
            <span class="dot">
              <img src={avatar} alt="avatar" className="avatar-img" />
            </span>
          </Col>
        </Row>
      </div>
    );
  }
}

export default LandingPage;
