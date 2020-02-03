import React from 'react';
import { Radio, Row, Col } from 'index';
import { decorator } from '../../../utils/decorator';

export default decorator('Input').add('Radio Component', () => (
  <>
    <Row>
      <Col s="12">
        <Radio />
      </Col>
    </Row>

    <Row>
      <Col s="12">
        <Radio secondary labelRight="secondary radio" />
      </Col>
    </Row>

    <Row>
      <Col s="12">
        <Radio disabled />
      </Col>
    </Row>

    <Row>
      <Col s="12">
        <Radio checked />
      </Col>
    </Row>

    <Row>
      <Col s="12">
        <Radio checked disabled />
      </Col>
    </Row>

    <Row>
      <Col s="12">
        <Radio labelRight="Drawing up budgets" />
      </Col>
    </Row>

    <Row>
      <Col s="12">
        <Radio labelLeft="Drawing up budgets" />
      </Col>
    </Row>
  </>
));
