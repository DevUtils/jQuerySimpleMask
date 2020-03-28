import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/bootstrap.dark.min.css';
import { Jumbotron, Button } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <Jumbotron>
        <h1>jQuerySimpleMask</h1>
        <p>
        Simple and fast number input masks
        </p>
        <p>
          <Button href="https://github.com/DevUtils/jQuerySimpleMask/archive/master.zip" variant="primary">Download</Button>
        </p>
      </Jumbotron>
    </div>
  );
}

export default App;
