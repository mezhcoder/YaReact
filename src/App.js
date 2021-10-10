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



const App = ({syncData}) => {
  const repository = new Repository();

  return (
      <Router>
        <div>
          <Switch>
            <Route path="/settings" app={this}>
              <SettingsPage syncData={syncData} isViewForm={true} repository={repository}/>
            </Route>
            <Route path="/" app={this}>
              <MainPage/>
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