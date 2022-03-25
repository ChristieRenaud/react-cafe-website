import React, { Component } from 'react'
import { Button, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'

class Adopt extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <Row className="px-1 px-sm-0" id="adopt">
            <Col md={10} className="mx-auto">
              <img
                src="/assets/images/relaxing-cat.jpg"
                class="img-fluid my-3 my-sm-5"
                alt="Cat relaxing looking in camera."
              />
              <h1 className="text-center mx-auto">
                All Our Cats Are Looking for a Good Home
              </h1>
              <p className="text-center mt-4 mx-auto">
                If you are interested in adding a new pet to your family, we
                invite you to view the cats currently available for adoption.
                For more information about a specific cat click on their photo.
              </p>
            </Col>
          </Row>
          <Row className="row-cols-1 row-cols-sm-3 row-cols-lg-4 cat-cards mt-4">
            <Col className="mb-5">
              <div className="card h-100">
                <img
                  src="/assets/images/cat-head-1.jpg"
                  className="card-img-top"
                  alt="Light-colored cat close up."
                />
                <div className="card-body">
                  <h5 className="card-title">Fluffy</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    American Shorthair, 2 years old
                  </h6>
                  <p className="card-text">
                    Fluffy is a very affectionate female cat. She loves to play
                    and does well with children and dogs.
                  </p>
                </div>
              </div>
            </Col>
            <Col className="col mb-5">
              <div className="card h-100">
                <img
                  src="/assets/images/cat-head-2.jpg"
                  className="card-img-top"
                  alt="Striped cat close up."
                />
                <div className="card-body">
                  <h5 className="card-title">Princess</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Tabby, 6 months old
                  </h6>
                  <p className="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content.
                  </p>
                </div>
              </div>
            </Col>
            <Col className="mb-5">
              <div className="card h-100">
                <img
                  src="/assets/images/cat-head-3.jpg"
                  className="card-img-top"
                  alt="Striped white gray and white cat close up."
                />
                <div className="card-body">
                  <h5 className="card-title">Tiger</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Calico, 4 years old
                  </h6>
                  <p className="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content.
                  </p>
                </div>
              </div>
            </Col>
            <Col className="col mb-5">
              <div className="card h-100">
                <img
                  src="/assets/images/cat-head-4.jpg"
                  className="card-img-top"
                  alt="Orange cat close up."
                />
                <div className="card-body">
                  <h5 className="card-title">Carrot</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    American Shorthair, 4 months old
                  </h6>
                  <p className="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="row my-5">
            <Col className="col-md-9 mx-auto text-center">
              <p>
                If you are interested in adopting one of these cats,{' '}
                <Link to="/visit">reserve a time</Link> to visit our cafe to
                find the cat that will be a perfect addition to your family. An
                adoption application and fee of $100 covering vaccinations and a
                medical checkup are required. For any questions, call us at
                248-XXX-XXXX, or email{' '}
                <a href="mailtoCalicoCafe@gmail.com">CalicoCafe@gmail.com</a>.
              </p>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default Adopt
