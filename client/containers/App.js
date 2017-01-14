import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import NavBar from '../components/NavBar';

class App extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <div>
        <NavBar />
      </div>
    )
  }
}

export default App;
