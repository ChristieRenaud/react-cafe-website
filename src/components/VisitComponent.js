import React, { Component } from 'react'
import { Button, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'

class Visit extends Component {
  render() {
    return (
      <div class="container">
        <div class="row px-2 mt-2 mb-0" id="registration-info">
          <div class="col-md-10 mx-auto text-center">
            <img
              src="/assets/images/man-drinking-coffee.jpg"
              class="img-fluid my-3 my-sm-5"
              alt="Man Drinking coffee with a cat."
            />
            <h1 class="">Register to visit our cats</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque,
              asperiores molestias amet laudantium fugit exercitationem
              cupiditate, necessitatibus inventore cumque aliquid atque. Amet
              minima enim reprehenderit atque veniam assumenda sint hic.
            </p>
          </div>
        </div>

        <div class="row row-content px-4">
          <div class="col-md-9 mx-auto bg-light border border-light p-2 p-sm-5">
            <form id="registration-form">
              <h5 class="text-uppercase pb-3">Personal Information</h5>
              <div class="form-row mb-3">
                <div class="col-md-6 mb-md-0 mb-3 ">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="First name"
                  />
                </div>
                <div class="col">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Last name"
                  />
                </div>
              </div>
              <div class="form-row mb-3">
                <div class="col">
                  <input
                    type="text"
                    class="form-control"
                    id="inputAddress2"
                    placeholder="Street Address"
                  />
                </div>
              </div>
              <div class="form-row mb-3">
                <div class="col-md-6 mb-3 mb-md-0">
                  <input
                    type="text"
                    class="form-control"
                    id="inputCity"
                    placeholder="City"
                  />
                </div>
                <div class="col-md-3 mb-3 mb-md-0">
                  <select id="inputState" class="form-control">
                    <option selected>State</option>
                    <option>...</option>
                  </select>
                </div>
                <div class="col-md-3 mb-3 mb-md-0">
                  <input
                    type="text"
                    class="form-control"
                    id="inputZip"
                    placeholder="Zip Code"
                  />
                </div>
              </div>
              <div class="form-row mb-3">
                <div class="col-md-6 mb-md-0 mb-3 ">
                  <input
                    type="tel"
                    class="form-control"
                    id="inputAddress2"
                    placeholder="Phone Number"
                  />
                </div>
                <div class="col">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Email Address"
                  />
                </div>
              </div>
              <h5 class="text-uppercase pt-4 pb-3">Choose a time to Visit:</h5>
              <div class="form-row mb-3">
                <div class="col-md-6 mb-md-0 mb-3 ">
                  <input type="date" class="form-control" />
                </div>
                <div class="col">
                  <select id="inputState" class="form-control">
                    <option selected>Time</option>
                    <option>10:00 AM</option>
                    <option>11:00 AM</option>
                    <option>12:00 PM</option>
                    <option>1:00 PM</option>
                    <option>2:00 PM</option>
                    <option>3:00 PM</option>
                    <option>4:00 PM</option>
                    <option>5:00 PM</option>
                  </select>
                </div>
              </div>
              <div class="form-row mb-3">
                <div class="col">
                  <input
                    type="number"
                    class="form-control"
                    placeholder="Number of Visitors"
                  />
                </div>
              </div>
              <div class="form-row mb-3">
                <div class="col">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" />
                    <label class="form-check-label">
                      {' '}
                      Check if interested in adopting a cat.
                    </label>
                  </div>
                </div>
              </div>
              <div class="form-group row mt-4">
                <div class="col">
                  <button type="submit" class="btn btn-primary">
                    Reserve Time
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Visit
