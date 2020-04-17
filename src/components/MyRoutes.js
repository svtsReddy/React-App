import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './Login';
import Welcome from './Welcome';

class MyRoutes extends React.Component {
  render () {
    return (
      <BrowserRouter>
      <div>
        <Route path='/' exact component={Welcome} />
        <Route path='/login' component={Login} />
        <Route path='/Welcome' component={Welcome} />
        </div>
      </BrowserRouter>
    )
  }
}
export default MyRoutes;