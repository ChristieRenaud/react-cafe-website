import React, { Component } from 'react'
import { Row, Col, Modal, ModalBody, ModalHeader, Card } from 'reactstrap'
import { Link } from 'react-router-dom'
import { CATS } from '../shared/cats'

class Adopt extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cats: CATS,
      isModalOpen: false,
      catId: `0`,
    }

    this.handleClick = this.handleClick.bind(this)
    this.toggleModal = this.toggleModal.bind(this)
  }

  toggleModal() {
    this.setState((state) => {
      return { isModalOpen: !this.state.isModalOpen }
    })
  }
  handleClick(event, cat) {
    const catID = event.target.dataset.id
    console.log(catID)
    this.setState((state) => {
      return { catId: catID }
    })
    console.log(this.state)
    this.toggleModal()
  }

  render() {
    const RenderCatThumbnail = ({ cat, toggle, handleClick }) => {
      return (
        <div className="card h-100">
          <img
            onClick={this.handleClick}
            src={cat.image}
            className="card-img-top"
            data-id={cat.id}
            alt={cat.alt}
          />
          <div className="card-body">
            <h5 className="card-title">{cat.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              {cat.type}, {cat.age}
            </h6>
          </div>
        </div>
      )
    }

    const RenderCatInfo = ({ selectedCat }) => {
      console.log(selectedCat)
      return (
        <>
          <ModalHeader tag="h2" className="pl-4" toggle={this.toggleModal}>
            {selectedCat.name}
          </ModalHeader>
          <Card className="m-sm-4">
            <img
              src={selectedCat.image}
              className="card-img-top"
              alt={selectedCat.alt}
            />

            <div className="card-body">
              <h6 className="card-subtitle mb-2 text-muted">
                {selectedCat.type}, {selectedCat.age}
              </h6>
              <p className="card-text">{selectedCat.longDescription}</p>
            </div>
          </Card>
        </>
      )
    }

    const catsList = this.state.cats.map((cat) => {
      return (
        <Col className="mb-5" key={cat.id}>
          <RenderCatThumbnail
            cat={cat}
            toggle={this.toggleModal}
            handleClick={this.handleClick}
          />
        </Col>
      )
    })
    return (
      <div>
        <div className="main-adopt hero">
          <h1 className="text-center text-white main-title">
            Our Cats Are Looking for a Good Home
          </h1>
        </div>
        <div className="container">
          <Row className="px-1 px-sm-0 my-4" id="adopt">
            <Col md={10} className="mx-auto">
              <p className="text-center mt-4 mx-auto">
                If you are interested in adding a new pet to your family, we
                invite you to view the cats currently available for adoption.
                For more information about a specific cat click on their photo.
              </p>
            </Col>
          </Row>
          <Row className="row-cols-1 row-cols-sm-3 row-cols-lg-4 cat-cards mt-4">
            {catsList}
          </Row>
          <Row className="row my-5">
            <Col className="col-md-9 mx-auto text-center px-4">
              <p>
                If you'd like to adopt one of these cats,{' '}
                <Link to="/visit">reserve a time</Link> to visit our cafe to
                find the cat that will be a perfect addition to your family. An
                adoption application and fee of $100 covering vaccinations and a
                medical checkup are required. For any questions, call us at
                248-XXX-XXXX, or email{' '}
                <a href="mailtoCalicoCafe@gmail.com">CalicoCafe@gmail.com</a>.
              </p>
            </Col>
          </Row>
          <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalBody>
              <RenderCatInfo
                selectedCat={
                  this.state.cats.filter(
                    (cat) => this.state.catId === cat.id,
                  )[0]
                }
                toggle={this.toggleModal}
              />
            </ModalBody>
          </Modal>
        </div>
      </div>
    )
  }
}

// const RenderCatThumbnail = ({ cat, toggle, handleClick }) => {
//   return (
//     <div className="card h-100">
//       <a className="catThumbnail" onClick={handleClick}>
//         <img
//           src={cat.image}
//           className="card-img-top"
//           data-id={cat.id}
//           alt={cat.alt}
//         />
//       </a>
//       <div className="card-body">
//         <h5 className="card-title">{cat.name}</h5>
//         <h6 className="card-subtitle mb-2 text-muted">
//           {cat.type}, {cat.age}
//         </h6>
//         <p className="card-text">{cat.shortDescription}</p>
//       </div>
//     </div>
//   )
// }

// const RenderCatInfo = ({ selectedCat }) => {
//   console.log(selectedCat)
//   return (
//     <Card>
//       <CardHeader>{selectedCat.name}</CardHeader>
//       <img
//         src={selectedCat.image}
//         className="card-img-top"
//         alt={selectedCat.alt}
//       />

//       <div className="card-body">
//         <h6 className="card-subtitle mb-2 text-muted">
//           {selectedCat.type}, {selectedCat.age}
//         </h6>
//         <p className="card-text">{selectedCat.longDescription}</p>
//       </div>
//     </Card>
//   )
// }
export default Adopt
