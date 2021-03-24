import React from 'react'
import Header from './Header'
import SwipeButtons from './SwipeButtons'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="main">
      <Router>
        <Switch>
        
          {/* home route */}
          <Route path='/'>
            <Header />
            <SwipeButtons />
          </Route>
        </Switch>
        
      </Router>
    </div>
  );
}

export default App;

