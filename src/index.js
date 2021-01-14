import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Page2 from './components/Page2'
import Page3 from './components/Page3'
import Page4 from './components/Page4'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'




const Root = () => {
  return (
      <Router>
        <Switch>
          <Route exact path='/' component={App} />
          <Route exact path='/page2' component={Page2} />
          <Route exact path='/page3' component={Page3} />
          <Route exact path='/page4' component={Page4} />
        </Switch>
      </Router>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));
