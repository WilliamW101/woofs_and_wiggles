import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <nav className="nav-extended nav-fixed">
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">Logo</a>
          <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>

          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="">Home</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">About Us</a></li>
            <li><a href="">Rates</a></li>
            <li><a href="">Hours</a></li>
            <li><a href="">Location</a></li>
            <li><a href="">Policies</a></li>
            <li><a href="">Facility</a></li>
            <li><a href="">Clients</a></li>
          </ul>

          <ul className="side-nav" id="mobile-demo">
            <li><a href="">Home</a></li>
            <li><a href="">Services</a></li>
            <li><a href="">About Us</a></li>
            <li><a href="">Rates</a></li>
            <li><a href="">Hours</a></li>
            <li><a href="">Location</a></li>
            <li><a href="">Policies</a></li>
            <li><a href="">Facility</a></li>
            <li><a href="">Clients</a></li>
          </ul>
        </div>
      </nav>

    )
  }
}

export default NavBar;
