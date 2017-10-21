import React, { Component } from 'react';

class DrugRiskTable extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="row">
        <p className="text-white lead col-md-12 lato">Top 10 risks for Lunesta</p>
        <div className="col-md-12">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Drug Name</th>
                <th># of Cases</th>
                <th>Risk %</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@TwBootstrap</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default DrugRiskTable;
