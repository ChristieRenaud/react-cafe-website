import React, { Component } from 'react'
import { Button, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'

class Home extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <div className="container-fluid" id="main">
          <Row className="row-content main-cover">
            <Col className="col-md-4 text-center text-md-left ml-md-3 main-content">
              <h1 className="text-white">Relax with Coffee and Cats</h1>
              <h3 className="text-white">
                Get ready to meet your new best friend.
              </h3>
              <Button color="primary" className="text-uppercase">
                <Link to="/visit" className="button-text-white">
                  Schedule Visit
                </Link>
              </Button>
            </Col>
          </Row>
        </div>
        <div container>
          <Row className="row-content">
            <Col className="col-10 col-md-8 mx-auto px-3 text-center">
              <p>
                The Calico Cafe is one of Michigan's oldest cat cafes. Located
                in the heart of Grosse Pointe, we offer customers a chance to
                enjoy a finely crafted beverage and interact with our playful,
                friendly cats. Sit back and watch their antics, or grab a toy
                and engage in a play session. If you are looking to add a pet to
                your family, our sweet cats are available for adoption.
              </p>
            </Col>
          </Row>
        </div>
        <div className="container mt-4">
          <Row className="row-content mx-auto">
            <Col className="col-md-10 bg-light mx-auto">
              <Row className="pt-5">
                <Col>
                  <h1 className="text-center">Our Location</h1>
                </Col>
              </Row>
              <Row className="px-0 px-sm-5 pb-6 pt-3">
                <Col md={8} className="mb-lg-5">
                  <img
                    src="/assets/images/map.jpg"
                    className="img-fluid border border-secondary rounded-sm"
                    alt="Street map of cafe location."
                  />
                </Col>
                <Col className="address text-dark mt-4 mt-md-0 pl-lg-4">
                  <div className="mb-3">
                    1234 Main Street
                    <br />
                    Grosse Pointe, MI 48236
                  </div>
                  <p className="text-muted phone">
                    Telephone: <br />
                    <a
                      href="tel:+1248XXXXXXX"
                      className="text-decoration-none text-dark"
                    >
                      248-XXX-XXXX
                    </a>
                    <br />
                  </p>
                  <Button
                    id="contactUsModalButton"
                    className="btn btn-lg btn-primary mt-2 mb-5"
                  >
                    CONTACT US
                  </Button>
                  <br />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default Home
