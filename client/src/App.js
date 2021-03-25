import './App.css';
import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom';
import {Container}from 'semantic-ui-react'
import Home from './components/Home';
import NavBar from './components/Navbar';
import NoMatch from './components/NoMatch';
import Login from './components/Login';
import Register from './components/Register';
import FetchUser from './components/FetchUser';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => (
    <Fragment>
    <NavBar />
      <FetchUser>
        <Container>
          <Switch>
            <ProtectedRoute exact path='/' component={Home}/>
            <Route exact path='/login' component={ Login } />
            <Route exact path='/register' component={Register}/>
            <Route component={NoMatch}/>
          </Switch>
        </Container>
      </FetchUser>
    </Fragment>
)

export default App;
