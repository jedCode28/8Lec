import React from 'react'
import { Link } from 'react-router-dom'
import { Header } from 'semantic-ui-react'

const NoMatch = () => {
  <Header as="h3" textAlign='center'>
    The Page You Are Looking For Is Not Here, Twat
    <Link to="/">Home</Link>
  </Header>
}
export default NoMatch;