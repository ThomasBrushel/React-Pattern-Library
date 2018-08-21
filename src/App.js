import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import Components from './components/pages/Components';
import NotFound from './components/pages/NotFound';
import './css/App.css';
import Header from '../src/components/layout/Header';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header 
            logo="MY LOGO"
            navBrand="nav-black"/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/components" component={Components} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;