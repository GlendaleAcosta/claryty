import React, { Component } from 'react';
import pills from 'images/medical.png';
import DrugRiskTable from 'components/Drugs/DrugRiskTable';
import DrugInfo from 'components/Drugs/DrugInfo';
// import axios from 'axios';
import { connect } from 'react-redux';
import { getTop10Reactions } from 'actions/drugActions';

class DrugPageContainer extends Component {
  constructor(props) {
    super(props);
    const drugName = props.match.params.drug;
    props.dispatch(getTop10Reactions('15', drugName));
  }

  render() {
    const { match } = this.props;
    return (
      <div className="full-screen">
        <div className="container pt-6">

          <div className="row pb-5">
            <div className="col-md-1" />
            <div className="d-flex align-items-center col-md-5">
              <img className="drug-pills-img" src={pills} alt="img" />
            </div>
            <div className="col-md-5 d-flex flex-column justify-content-center">
              <h1 className="text-white lato">{match.params.drug}</h1>
              <DrugInfo {...this.props} />
              <a
                className="lato text-white"
                href={`https://en.wikipedia.org/wiki/${match.params.drug}`}
              >
                ...more info
              </a>
            </div>
            <div className="col-md-1" />
          </div>

          <div className="divider" />

          <DrugRiskTable {...this.props} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    drugReducer: state.drugReducer,
  };
}
export default connect(mapStateToProps)(DrugPageContainer);
