import React, { Component } from 'react'
import {
  Button,
  Row,
  Col,
  Modal,
  ModalBody,
  ModalHeader,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap'
import { Link } from 'react-router-dom'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = { isModalOpen: false }
  }

  handleSubmit = (event) => {
    alert(
      `First Name: ${this.firstName.value} Last Name: ${this.lastName.value} Email: ${this.email.value} Phone Number: ${this.phoneNumber.value} Comments: ${this.comments.value}`,
    )
    console.log(
      `First Name: ${this.firstName.value} Last Name: ${this.lastName.value} Email: ${this.email.value} Phone Number: ${this.phoneNumber.value} Comments: ${this.comments.value}`,
    )
    this.toggleModal()
    event.preventDefault()
  }
  toggleModal = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    })
  }

  render() {
    return (
      <div>
        {/* <div className="container-fluid" id="main">
          <Row className="row-content main-cover">
            <Col className="col-md-4 text-center text-md-left ml-md-3 main-content">
              <h1 className="text-white">Relax with Coffee and Cats</h1>
              <h3 className="text-white">
                Get ready to meet your new best friend.
              </h3>
              <Button color="secondary" className="text-uppercase">
                <Link to="/visit" className="button-text-white">
                  Schedule Visit
                </Link>
              </Button>
            </Col>
          </Row>
        </div> */}
        <div className="container-fluid" id="main">
          <Row className="main-cover">
            <Col className="col-md-4 text-center text-sm-left main-content">
              <h1 className="text-white">Relax with Coffee and Cats</h1>
              <h3 className="text-white">
                Get ready to meet your new best friend.
              </h3>
              <Button color="secondary" className="text-uppercase">
                <Link to="/visit" className="button-text-white">
                  Schedule Visit
                </Link>
              </Button>
            </Col>
            <Col className="main-img">
              {/* <img
                src="/assets/images/man-drinking-coffee.jpg"
                className="img-fluid"
                alt="Man Drinking coffee with a cat."
              /> */}
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
        <div className="container">
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
                    className="btn-lg btn-primary mt-2 mb-5"
                    onClick={this.toggleModal}
                  >
                    CONTACT US
                  </Button>
                  <br />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <Modal
          id="contactUsModal"
          tabIndex="-1"
          isOpen={this.state.isModalOpen}
          toggle={this.toggleModal}
        >
          <ModalHeader
            className="bg-secondary"
            id="loginModalHeader"
            toggle={this.toggleModal}
          >
            Contact Us
          </ModalHeader>
          <ModalBody>
            <div className="container-fluid">
              <Form onSubmit={this.handleSubmit}>
                <FormGroup row className="mt-3">
                  <FormGroup className="col-12">
                    <Label className="sr-only" for="loginEmail">
                      First Name
                    </Label>
                    <Input
                      type="text"
                      className="form-control"
                      id="firstName"
                      name="firstName"
                      placeholder="First Name"
                      innerRef={(input) => (this.firstName = input)}
                    />
                  </FormGroup>
                  <FormGroup className="col-12">
                    <Label className="sr-only" for="loginEmail">
                      Last Name
                    </Label>
                    <Input
                      type="text"
                      className="form-control"
                      id="lastName"
                      name="lastName"
                      placeholder="Last Name"
                      innerRef={(input) => (this.lastName = input)}
                    />
                  </FormGroup>
                  <FormGroup className="col-12">
                    <Label className="sr-only" for="loginEmail">
                      Telephone
                    </Label>
                    <Input
                      type="tel"
                      className="form-control"
                      id="phoneNumber"
                      name="phoneNumber"
                      placeholder="Phone Number"
                      innerRef={(input) => (this.phoneNumber = input)}
                    />
                  </FormGroup>
                  <FormGroup className="col-12">
                    <Label className="sr-only" for="loginEmail">
                      Email address
                    </Label>
                    <Input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Email"
                      innerRef={(input) => (this.email = input)}
                    />
                  </FormGroup>
                  <FormGroup className="col-12">
                    <Label for="Comments">Questions or Comments</Label>
                    <Input
                      type="textarea"
                      className="form-control"
                      id="comments"
                      name="comments"
                      innerRef={(input) => (this.comments = input)}
                      rows="8"
                    />
                  </FormGroup>
                  <FormGroup className="col-12">
                    <Button className="btn-secondary">Close</Button>
                    <Button className="btn-primary">Submit</Button>
                  </FormGroup>
                </FormGroup>
              </Form>
            </div>
          </ModalBody>
        </Modal>
      </div>
    )
  }
}

export default Home
