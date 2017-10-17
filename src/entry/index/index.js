import 'modules/base-style';
import React from 'react';
import { render } from 'react-dom'
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom'

import pageHome from './pages/Home';
import pageLogin from './pages/Login';



const App = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li><Link to="/">Form</Link></li>
        <li><Link to="/login">One</Link></li>
      </ul>
      <Route path="/" component={pageHome} />
      <Route path="/login" component={pageLogin} />
    </div>
  </BrowserRouter>
)



render(<App />, document.getElementById('root'))
