import React, { Component } from 'react';
import { getTop10Reactions } from 'actions/drugActions';

class DrugRiskTable extends Component {
  constructor(props) {
    super(props);
    this.state = { year: '15' };
  }

  changeYear(year) {
    const { dispatch, match } = this.props;
    this.setState({ year });
    dispatch(getTop10Reactions(year, match.params.drug));
  }

  renderRows() {
    if (!this.props.drugReducer.top10Reactions) return null;
    return this.props.drugReducer.top10Reactions.map((reaction, index) => {
      return (
        <tr key={reaction.id} className="text-white lato">
          <th scope="row">{index + 1}</th>
          <td>{reaction.reaction || reaction.pt}</td>
          <td>{reaction.count || reaction.Count}</td>
          <td><a className="text-white" href="/files/Consumer_safety_model.tiff" >Risk</a></td>
        </tr>
      );
    });
  }

  render() {
    const { match } = this.props;
    return (
      <div className="row">
        <p className="text-white lead col-md-12">Top 10 risks for {match.params.drug}</p>
        <div className="col-md-12">
          <button
            onClick={() => this.changeYear('15')}
            className="btn btn-primary tab-btn br-0"
          >
            2015
          </button>
          <button
            onClick={() => this.changeYear('14')}
            className="btn btn-primary tab-btn br-0"
          >
            2014
          </button>
          <button
            onClick={() => this.changeYear('04')}
            className="btn btn-primary tab-btn br-0"
          >
            2004
          </button>
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th className="col-title">#</th>
                <th className="col-title">Adverse Effect</th>
                <th className="col-title">Number of Cases in 20{this.state.year}</th>
                <th className="col-title">Risk %</th>
              </tr>
            </thead>
            <tbody>
              {this.renderRows()}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default DrugRiskTable;
