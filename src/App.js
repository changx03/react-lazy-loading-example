import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import asyncComponent from './asyncComponent';

const Component1 = asyncComponent(() => import('./Component1'));
const Component2 = asyncComponent(() => import('./Component2'));

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <nav>
              <ul style={{ listStyle: 'none' }}>
                <li style={{ display: 'inline-block', margin: 20 }}>
                  <Link to="/">Home</Link>
                </li>
                <li style={{ display: 'inline-block', margin: 20 }}>
                  <Link to="/bundle1">Bundle 1</Link>
                </li>
                <li style={{ display: 'inline-block', margin: 20 }}>
                  <Link to="/bundle2">Bundle 2</Link>
                </li>
              </ul>
            </nav>
          </header>
          <Switch>
            <Route path="/bundle1" component={Component1} />
            <Route path="/bundle2" component={Component2} />

            <Route
              render={() => (
                <div>
                  <h1>Our mean page</h1>
                  <p>A lazy loading example</p>
                </div>
              )}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
