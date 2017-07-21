import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';

class Head extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <div>
        <a class="btn-floating btn-large waves-effect waves-light red"><i class="material-icons">add</i></a>
      </div>
    )
  }
}

export default Head;
