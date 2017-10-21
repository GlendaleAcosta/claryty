import React, { Component } from 'react';
import pills from 'images/medical.png';
// import axios from 'axios';
import DrugRiskTable from 'components/Drugs/DrugRiskTable';

class DrugPageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    // this.testGetRequest = this.testGetRequest.bind(this);
  }

  // testGetRequest() {
  //   axios.get('/api/drug')
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  render() {
    return (
      <div className="full-screen">
        <div className="container pt-6">

          <div className="row pb-5">
            <div className="col-md-1" />
            <div className="d-flex align-items-center col-md-5">
              <img className="drug-pills-img" src={pills} alt="img" />
            </div>
            <div className="col-md-5 d-flex flex-column justify-content-center">
              <h1 className="text-white lato">Lunesta</h1>
              <p className="text-white lato">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
              <a
                className="lato text-white"
                href="https://www.webmd.com/drugs/2/drug-92350/lunesta-oral/details"
              >
                ...more info
              </a>
            </div>
            <div className="col-md-1" />
          </div>

          <div className="divider" />
          <DrugRiskTable />
        </div>
      </div>
    );
  }
}

export default DrugPageContainer;
