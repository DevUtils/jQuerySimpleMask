import React from 'react';
import { Form, Col } from 'react-bootstrap';

export default class Header extends React.Component {
  render(){
  return (
    <Col>
      <Form.Group controlId={this.props.controlId}>
        <Form.Label>{this.props.caption}</Form.Label>
        <Form.Control type="text" placeholder={this.props.caption} />
      </Form.Group>
    </Col>)
  }
}