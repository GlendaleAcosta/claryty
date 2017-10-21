import React, { Component } from 'react';
import DrugSearch from 'components/Home/DrugSearch';
import homeImg from 'images/med2.svg';
import CopyRight from 'components/Copyright';

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container-fluid full-screen">
        <DrugSearch {...this.props} />
        <img className="home-img" src={homeImg} alt="dergs" />
        <CopyRight />
      </div>
    );
  }
}

export default HomeContainer;
