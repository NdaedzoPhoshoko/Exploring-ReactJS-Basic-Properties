import Header from './components/common/heading/Header.jsx'
import React from 'react'
import {BrowserRouter as Router, Switch} from "react-router-dom"
import './App.css' // Importing CSS styles for the app component

function App() {
  return (
    <div>
      {/* this is a router, it allows switching to different pages*/}
      <Router>
      <Header />
        <Switch>
          {/*<Route path="/">
          </Route>*/}
        </Switch>
      </Router>
    </div>
  )
}
export default App

