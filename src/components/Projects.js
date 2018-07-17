import React, { Component } from "react";
import shopping_list from "../images/shopping_list.png";
import StoryBooks from "../images/StoryBooks.png";
import DevConnector from "../images/DevConnector.png";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col
} from "reactstrap";
import classnames from "classnames";

class Projects extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1"
    };
  }
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div>
        <div className="tabs-p">
          <Nav tabs justified>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === "1" })}
                onClick={() => {
                  this.toggle("1");
                }}
              >
                Shopping List
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === "2" })}
                onClick={() => {
                  this.toggle("2");
                }}
              >
                StoryBooks
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === "3" })}
                onClick={() => {
                  this.toggle("3");
                }}
              >
                Dev Connector
              </NavLink>
            </NavItem>
          </Nav>
        </div>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <div className="landing-grid">
                  <img
                    src={shopping_list}
                    alt="avatar"
                    className="projects-img"
                  />

                  <div className="banner-text">
                    <h1>Shopping List Application</h1>

                    <hr />

                    <p>
                      A spin on the classic 'TO-DO' application that all
                      aspiring programmers confront at some point in thier
                      learning process. Here we have a fullstack CRUD
                      application built with the MERN stack. The front and back
                      ends are kept as simple as possible to showcase the
                      understanding of the basics in full stack web development.
                    </p>
                    <div className="social-links">
                      {/* LinkedIn */}
                      <a
                        href="https://shielded-beyond-63899.herokuapp.com/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <i className="fa fa-desktop" aria-hidden="true" />
                      </a>

                      {/* Github */}
                      <a
                        href="https://github.com/rrmarsh100/shoppinglist"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <i className="fa fa-github-square" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                <div className="landing-grid">
                  <img src={StoryBooks} alt="avatar" className="projects-img" />

                  <div className="banner-text">
                    <h1>StoryBooks</h1>

                    <hr />

                    <p>
                      StoryBooks is a social network for creating public or
                      private stories. Users can choose to allow or disable
                      comments per story. Uses Google OAuth for authentication.
                      This applications showcases my ability to create a
                      complete server-side application with authentication, and
                      an understanding of the Express framwork and file
                      structure.
                    </p>
                    <p>
                      Technologies Used: Node/Express/MongoDB, Mongoose,
                      Passport (google OAuth), Handlebars, Moment.js,
                      Materialize CSS
                    </p>
                    <div className="social-links">
                      {/* Live Demo */}
                      <a
                        href="https://dry-citadel-71595.herokuapp.com/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <i className="fa fa-desktop" aria-hidden="true" />
                      </a>

                      {/* Github */}
                      <a
                        href="https://github.com/rrmarsh100/storybooks"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <i className="fa fa-github-square" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
              <Col sm="12">
                <div className="landing-grid">
                  <img
                    src={DevConnector}
                    alt="avatar"
                    className="projects-img"
                  />

                  <div className="banner-text">
                    <h1>Dev Connector</h1>

                    <hr />

                    <p>Dev Connector</p>
                    <p>Mern stack</p>
                    <div className="social-links">
                      {/* Live Demo */}
                      <a
                        href="https://evening-badlands-99062.herokuapp.com/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <i className="fa fa-desktop" aria-hidden="true" />
                      </a>

                      {/* Github */}
                      <a
                        href="https://github.com/rrmarsh100/devconnector"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <i className="fa fa-github-square" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

export default Projects;
