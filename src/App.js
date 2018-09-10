import React, { Component } from 'react';
import { 
  Switch,
  Route,
} from 'react-router-dom';

// Styling
import './assets/css/main.css';
import './assets/css/reset.css';

// Pages
import Home from './pages/Home';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    );
  }
}

export default App;