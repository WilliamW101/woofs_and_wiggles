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
      <nav className="nav-extended">
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">Logo</a>
          <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>

          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="sass.html">Sass</a></li>
            <li><a href="badges.html">Components</a></li>
            <li><a href="collapsible.html">JavaScript</a></li>
          </ul>

          <ul className="side-nav" id="mobile-demo">
            <li><a href="sass.html">Sass</a></li>
            <li><a href="badges.html">Components</a></li>
            <li><a href="collapsible.html">JavaScript</a></li>
          </ul>

          <ul className="tabs tabs-transparent">
            <li className="tab"><a href="#test1">Test 1</a></li>
            <li className="tab"><a className="active" href="#test2">Test 2</a></li>
            <li className="tab disabled"><a href="#test3">Disabled Tab</a></li>
            <li className="tab"><a href="#test4">Test 4</a></li>
          </ul>
        </div>
      </nav>

    )
  }
}

export default NavBar;
