import React, { Component } from 'react';
import Navbar from 'components/Navbar';

class NavbarContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Navbar {...this.props} />
    );
  }
}

export default NavbarContainer;
