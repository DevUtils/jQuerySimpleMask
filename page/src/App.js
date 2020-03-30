import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/bootstrap.dark.min.css';
import { Container, Row, Col, Form } from 'react-bootstrap';
import Header from "./Components/Header";
import Field from "./Components/Field";
import './App.css';

function getHelperModePreCode() {
  return String.raw`$(document).ready
(
  function()
  {
    $('#frCep' ).simpleMask( { 'mask': 'cep'     , 'nextInput': true } );
    $('#frDtel').simpleMask( { 'mask': 'ddd-tel9', 'nextInput': true } );
    $('#frTel' ).simpleMask( { 'mask': 'tel9'    , 'nextInput': true } );
    $('#frData').simpleMask( { 'mask': 'data'    , 'nextInput': true } );
    $('#frCpf' ).simpleMask( { 'mask': 'cpf'     , 'nextInput': true } );
    $('#frCnpj').simpleMask( { 'mask': 'cnpj'    , 'nextInput': true } );
  }
);`
}

function getCustomPreCode() {
  return String.raw`$(document).ready
(
  function()
  {
    $('#frCep' ).simpleMask( { 'mask': '#####-###'                          , 'nextInput': $('#frDtel') } );
    $('#frDtel').simpleMask( { 'mask': ['(##) ####-####', '(##) #####-####'], 'nextInput': $('#frTel' ) } );
    $('#frTel' ).simpleMask( { 'mask': ['####-####', '#####-####']          , 'nextInput': $('#frData') } );
    $('#frData').simpleMask( { 'mask': '##/##/####'                         , 'nextInput': $('#frCpf' ) } );
    $('#frCpf' ).simpleMask( { 'mask': '###.###.###-##'                     , 'nextInput': $('#frCnpj') } );
    $('#frCnpj').simpleMask( { 'mask': '##.###.###/####-##' } );

  $('#frCallback').simpleMask
  (
    {
      'mask'       : '#####',
      'nextInput'  : true,
      'onComplete' : function(element)
      {
        console.log('onComplete', element);
      }
    }
  );
);`
}

function App() {
  return (
    <div className="App">
      <Header />

      <Container>
        <Row>
          <Col>
            <Form>
              <Row>
                <Field controlId="frCep" caption="CEP"/>
                <Field controlId="frDtel" caption="(DDD) Telefone"/>
              </Row>
              <Row>
                <Field controlId="frTel" caption="Telefone"/>
                <Field controlId="frData" caption="Data"/>
              </Row>
              <Row>
                <Field controlId="frCpf" caption="CPF"/>
                <Field controlId="frCnpj" caption="CNPJ"/>
              </Row>
              <Row>
                <Field controlId="frCallback" caption="With Callback"/>
                <Field controlId="frNone" caption="Without Mask"/>
              </Row>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Helper Mode</h3>
            <pre>{getHelperModePreCode()}</pre>
          </Col>
          <Col>
            <h3>Custom Mode</h3>
            <pre>{getCustomPreCode()}</pre>
          </Col>
        </Row>
     </Container>

    </div>
  );
}

export default App;
