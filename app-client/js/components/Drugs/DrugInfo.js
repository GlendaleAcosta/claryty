import React, { Component } from 'react';
import { getDrugInfo } from 'actions/drugActions';

class DrugInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    const drugName = props.match.params.drug;
    props.dispatch(getDrugInfo(drugName));
  }

  render() {
    return (
      <p className="text-white lato">
        {this.props.drugReducer.drugInfo}
      </p>
    );
  }
}

export default DrugInfo;
