import './App.css';
import React from 'react'
import { Route, Switch } from 'react-router-dom';
import {Container}from 'semantic-ui-react'
import Home from './components/Home';
import NavBar from './components/Navbar';
import NoMatch from './components/NoMatch';
import Login from './components/Login';
import Register from './components/Register';

const App = () => (
    <>
    <NavBar />
     <Container>
       <Switch>
         <Route exact path='/' component={Home}/>
         <Route exact path='/login' component={ Login } />
         <Route exact path='/register' component={Register}/>
         <Route component={NoMatch}/>
       </Switch>
     </Container>
    </>
)

export default App;
