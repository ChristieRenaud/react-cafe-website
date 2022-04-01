import React, { Component } from 'react'
import { Button, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap'
import { Link } from 'react-router-dom'

class Visit extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: '',
      lastName: '',
      streetAddress: '',
      city: '',
      state: '',
      zipCode: '',
      emailAddress: '',
      phoneNumber: '',
      date: '',
      numOfVisitors: 0,
      adoptInterest: false,
    }
  }

  formUpdate = (event) => {
    const target = event.target
    const name = target.name
    const value = target.type === 'checkbox' ? target.checked : target.value
    this.setState({
      [name]: value,
    })
  }
  handleSubmit = (event) => {
    console.log('Current state is ' + JSON.stringify(this.state))
    event.preventDefault()
  }
  render() {
    return (
      <div className="container">
        <div className="row px-2 mt-2 mb-0" id="registration-info">
          <div className="col-md-10 mx-auto text-center">
            <img
              src="/assets/images/man-drinking-coffee.jpg"
              className="img-fluid my-3 my-sm-5"
              alt="Man Drinking coffee with a cat."
            />
            <h1 className="">Register to visit our cats</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque,
              asperiores molestias amet laudantium fugit exercitationem
              cupiditate, necessitatibus inventore cumque aliquid atque. Amet
              minima enim reprehenderit atque veniam assumenda sint hic.
            </p>
          </div>
        </div>

        <Row className="row-content px-4">
          <Col className="col-md-9 mx-auto bg-light border border-light p-2 p-sm-5">
            <Form id="registration-form" onSubmit={this.handleSubmit}>
              <h5 className="text-uppercase pb-3">Personal Information</h5>
              <FormGroup row className="mb-3">
                <Col className="col-md-6 mb-md-0 mb-3 ">
                  <Input
                    type="text"
                    name="firstName"
                    className="form-control"
                    placeholder="First name"
                    value={this.state.firstName}
                    onChange={this.formUpdate}
                  />
                </Col>
                <Col>
                  <Input
                    type="text"
                    name="lastName"
                    className="form-control"
                    placeholder="Last name"
                    value={this.state.lastName}
                    onChange={this.formUpdate}
                  />
                </Col>
              </FormGroup>
              <FormGroup row className="mb-3">
                <Col>
                  <Input
                    type="text"
                    name="streetAddress"
                    className="form-control"
                    id="streetAddress"
                    placeholder="Street Address"
                    value={this.state.streetAddress}
                    onChange={this.formUpdate}
                  />
                </Col>
              </FormGroup>
              <FormGroup row className="mb-3">
                <div className="col-md-6 mb-3 mb-md-0">
                  <Input
                    type="text"
                    name="city"
                    className="form-control"
                    id="city"
                    placeholder="City"
                    value={this.state.city}
                    onChange={this.formUpdate}
                  />
                </div>
                <Col className="col-md-3 mb-3 mb-md-0">
                  <Input
                    type="select"
                    id="state"
                    name="state"
                    className="form-control"
                  >
                    <option>State</option>
                    <option>...</option>
                  </Input>
                </Col>
                <Col className="col-md-3 mb-3 mb-md-0">
                  <Input
                    type="text"
                    name="zipCode"
                    className="form-control"
                    id="zipCode"
                    placeholder="Zip Code"
                    value={this.state.zipCode}
                    onChange={this.formUpdate}
                  />
                </Col>
              </FormGroup>
              <FormGroup row className="mb-3">
                <Col className="col-md-6 mb-md-0 mb-3 ">
                  <Input
                    type="tel"
                    name="phoneNumber"
                    className="form-control"
                    id="phoneNumber"
                    placeholder="Phone Number"
                    value={this.state.phoneNumber}
                    onChange={this.formUpdate}
                  />
                </Col>
                <Col>
                  <Input
                    type="email"
                    name="emailAddress"
                    className="form-control"
                    placeholder="Email Address"
                    value={this.state.emailAddress}
                    onChange={this.formUpdate}
                  />
                </Col>
              </FormGroup>
              <h5 className="text-uppercase pt-4 pb-3">
                Choose a time to Visit:
              </h5>
              <FormGroup row className="mb-3">
                <Col className="col-md-6 mb-md-0 mb-3 ">
                  <Input
                    type="date"
                    name="date"
                    className="form-control"
                    value={this.state.date}
                    onChange={this.formUpdate}
                  />
                </Col>
                <Col>
                  <Input
                    type="select"
                    id="inputState"
                    name="time"
                    value={this.state.time}
                    className="form-control"
                  >
                    <option>Time</option>
                    <option>10:00 AM</option>
                    <option>11:00 AM</option>
                    <option>12:00 PM</option>
                    <option>1:00 PM</option>
                    <option>2:00 PM</option>
                    <option>3:00 PM</option>
                    <option>4:00 PM</option>
                    <option>5:00 PM</option>
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row className="mb-3">
                <Col>
                  <Input
                    type="number"
                    name="numOfVisitors"
                    className="form-control"
                    placeholder="Number of Visitors"
                    value={this.state.numOfVisitors}
                    onChange={this.formUpdate}
                  />
                </Col>
              </FormGroup>
              <FormGroup row className="mb-3">
                <Col>
                  <div className="form-check">
                    <Input
                      className="form-check-input"
                      name="adoptInterest"
                      type="checkbox"
                      checked={this.state.adoptInterest}
                      onChange={this.formUpdate}
                    />
                    <Label className="form-check-label">
                      {' '}
                      Check if interested in adopting a cat.
                    </Label>
                  </div>
                </Col>
              </FormGroup>
              <FormGroup row className="mt-4">
                <Col>
                  <Button type="submit" className="btn-primary">
                    Reserve Time
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Visit
