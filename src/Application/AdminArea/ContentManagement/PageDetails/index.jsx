import React from 'react';
import { Col, Row, Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
import Site from '../../../scenes/Site'

class PageDetails extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col sm={6}>
            <FormGroup controlId="formBasicEmail">
              <Row>
                <Col sm={2}>
                  <ControlLabel>Title:</ControlLabel>
                </Col>
                <Col sm={10}>
                  <FormControl type="text" placeholder="Full Stack" />
                </Col>
              </Row>
            </FormGroup>
          </Col>
          <Col sm={6}>
            <FormGroup controlId="formBasicEmail">
              <Row>
                <Col sm={2}>
                  <ControlLabel>Path:</ControlLabel>
                </Col>
                <Col sm={10}>
                  <FormControl type="text" placeholder="/portfolio" />
                </Col>
              </Row>
            </FormGroup>
          </Col>
          <Col sm={12}>
            <Site/>
          </Col>
        </Row>
      </div>
    )
  }
}

export default PageDetails