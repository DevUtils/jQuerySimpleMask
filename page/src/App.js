import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/bootstrap.dark.min.css';
import { Container, Row, Col, Form } from 'react-bootstrap';
import Header from "./Components/Header";
import Field from "./Components/Field";
import './App.css';

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
     </Container>

    </div>
  );
}

export default App;
