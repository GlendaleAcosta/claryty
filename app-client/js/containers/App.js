import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NavbarContainer from 'containers/NavbarContainer';
import HomeContainer from 'containers/HomeContainer';
import DrugPageContainer from 'containers/DrugPageContainer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Route path={'*'} component={NavbarContainer} />
        <Route exact path={'/'} component={HomeContainer} />
        <Route path="/drug/:drug" component={DrugPageContainer} />
      </div>
    );
  }
}
// <Route path={'/drug/:drug'} component={DrugPageContainer} />

export default App;
