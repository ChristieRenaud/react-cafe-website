import React, { Component } from 'react'
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import Adopt from './AdoptComponent'
import Events from './EventsComponent'
import Visit from './VisitComponent'
import Home from './HomeComponent'
import { Switch, Route, Redirect } from 'react-router-dom'

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/adopt">
            <Adopt />
          </Route>
          <Route path="/visit">
            <Visit />
          </Route>
          <Route path="/events">
            <Events />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default Main
