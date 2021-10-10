// import logo from './logo.svg';
// import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import MainPage from "./components/MainPage";
import SettingsPage from "./components/SettingsPage";
import './css/GlobalPage.css'
import './css/SettingsForm.css'

import {connect} from 'react-redux'
import Repository from "./backend/Repository";
import ComponentClear from "./components/ComponentClear";



const App = ({syncData}) => {
  const repository = new Repository();

  return (
      <Router>
        <div>
          <Switch>
            <Route path="/clear" app={this} component={<SettingsPage syncData={syncData} repository={repository}/>}>
              <ComponentClear/>
            </Route>

            <Route path="/settings" app={this}>
              <SettingsPage syncData={syncData} repository={repository}/>
            </Route>

            <Route path="/" app={this}>
              {isEmptySyncData(syncData) ? <MainPage/> : <SettingsPage syncData={syncData} repository={repository}/>}
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

const mapStateToProps = state => {
  return {
    syncData: state.data.data
  }
}

function isEmptySyncData(syncData) {
  return !(syncData.repository.trim() && syncData.command.trim() && syncData.branch.trim());
}


export default connect(mapStateToProps, null)(App);

// export default App;


/*<nav>*/
/*  <ul>*/
/*    <li>*/
/*      <Link to="/">Home</Link>*/
/*    </li>*/
/*    <li>*/
/*      <Link to="/Settings">Build</Link>*/
/*    </li>*/
/*  </ul>*/
/*</nav>*/