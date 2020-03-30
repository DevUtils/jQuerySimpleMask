import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import './style.css';

export default class Header extends React.Component {
  render(){
  return (
    <Jumbotron className="jumbotron">
      <h1>jQuerySimpleMask</h1>
      <p>
        Simple and fast number input masks
      </p>
      <p>
        <Button href="https://github.com/DevUtils/jQuerySimpleMask/archive/master.zip" variant="primary">Download</Button>
      </p>
    </Jumbotron>)
  }
}