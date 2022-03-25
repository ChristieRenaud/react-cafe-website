import React, { Component } from 'react'
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
} from 'reactstrap'
import { NavLink } from 'react-router-dom'

class Header extends Component {
  constructor(props) {
    super(props)
    this.toggleNav = this.toggleNav.bind(this)
    this.state = {
      isNavOpen: false,
    }
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    })
  }

  render() {
    return (
      <Navbar className="navbar-dark bg-dark" sticky="top" expand="sm">
        <div className="container">
          <NavbarBrand className="ml-2" href="/">
            <img
              src="/assets/images/white_silhouette.png"
              height="32"
              width="32"
              alt="white cat silhouette"
            />{' '}
            Calico Cafe
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNav} />
          <Collapse
            isOpen={this.state.isNavOpen}
            navbar
            className="justify-content-end"
          >
            <Nav navbar>
              <NavItem>
                <NavLink className="nav-link" to="/home">
                  {' '}
                  Home{' '}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/visit">
                  {' '}
                  Visit{' '}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/adopt">
                  {' '}
                  Adopt{' '}
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/events">
                  {' '}
                  Events{' '}
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    )
  }
}

export default Header
