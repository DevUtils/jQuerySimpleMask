import React from 'react';
import { Button } from 'react-bootstrap';
import './style.css';

function Header() {
  return (
    <div className="jumbotron">
      <h1>jQuery Simple Mask</h1>
      <p>
        Simple and fast number input masks
      </p>
      <p>
        <Button href="https://github.com/DevUtils/jQuerySimpleMask/archive/master.zip" variant="primary">Download</Button>
      </p>
    </div>
  )
}

export default Header;
