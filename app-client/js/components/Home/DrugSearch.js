import React, { Component } from 'react';

class DrugSearch extends Component {
  constructor(props) {
    super(props);
    this.state = { drugQuery: '' };
    this.handleChange = this.handleChange.bind(this);
    this.searchDrug = this.searchDrug.bind(this);
  }

  handleChange(e) {
    this.setState({ drugQuery: e.target.value });
  }

  searchDrug(e) {
    e.preventDefault();
    this.props.history.push(`/drug/${this.state.drugQuery}`);
  }

  render() {
    return (
      <div className="drug-search">
        <h1 className="lato text-white py-4" >How Dangerous is Your Medication?</h1>
        <form onSubmit={this.searchDrug}>
          <div className="input-group">
            <input
              type="text"
              className="form-control rounded-0 border-0"
              placeholder="Search Drug..."
              value={this.state.drugQuery}
              onChange={this.handleChange}
            />
            <button
              type="submit"
              className="input-group-addon rounded-0 border-0 btn btn-success btn-search text-white"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default DrugSearch;
