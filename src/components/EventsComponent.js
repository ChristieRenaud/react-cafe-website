import React, { Component } from 'react'
import { UPCOMING_EVENTS } from '../shared/upcomingEvents'
import { Row, Col } from 'reactstrap'

const RenderEvent = ({ upcomingEvent }) => {
  return (
    <Row className="mx-auto row-content">
      <Col className="col-10 col-sm-4 mx-auto mx-sm-0 mb-5">
        <img
          src={upcomingEvent.image}
          className="img-fluid"
          alt={upcomingEvent.alt}
        />
      </Col>
      <Col className="col-sm-7 text-center text-sm-left">
        <h3>{upcomingEvent.name}</h3>
        <h4 className="text-secondary">
          {upcomingEvent.date} {String.fromCharCode(183)} {upcomingEvent.time}
        </h4>
        <p>{upcomingEvent.description}</p>
      </Col>
    </Row>
  )
}
class Events extends Component {
  state = {
    upcomingEvents: UPCOMING_EVENTS,
  }
  events = this.state.upcomingEvents.map((upcomingEvent) => {
    return (
      <div key={upcomingEvent.id}>
        <RenderEvent upcomingEvent={upcomingEvent} />
      </div>
    )
  })

  render() {
    return (
      <div>
        <div className="main-events hero">
          <h1 className="text-center text-white main-title">Upcoming Events</h1>
        </div>
        <div className="container px-5">
          <Row className="row-content" id="events">
            <Col className="col-md-10 mx-auto text-center">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum,
                dolorum suscipit. Deserunt odio dolore blanditiis similique
                delectus autem dolorum ducimus illo, nulla reprehenderit
                consectetur?
              </p>
            </Col>
          </Row>
          <Row>{this.events}</Row>
        </div>
      </div>
    )
  }
}

export default Events
