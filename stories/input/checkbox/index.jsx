import React from 'react';
import { Checkbox, Row, Col } from 'index';
import { decorator } from '../../../utils/decorator';

export default decorator('Input').add('Checkbox Component', () => (
  <>
    <Row>
      <Col s="12">
        <Checkbox />
      </Col>
    </Row>

    <Row>
      <Col s="12">
        <Checkbox disabled />
      </Col>
    </Row>

    <Row>
      <Col s="12">
        <Checkbox checked />
      </Col>
    </Row>

    <Row>
      <Col s="12">
        <Checkbox checked disabled />
      </Col>
    </Row>
  </>
));
