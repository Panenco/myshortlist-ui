import React from 'react';
import { Switcher, Row, Col } from 'index';
import { decorator } from '../../../utils/decorator';

export default decorator('Input').add('Switcher Component', () => (
  <>
    <Row>
      <Col s="12">
        <Switcher id="1" />
      </Col>
    </Row>

    <Row>
      <Col s="12">
        <Switcher disabled />
      </Col>
    </Row>

    <Row>
      <Col s="12">
        <Switcher checked id="2" />
      </Col>
    </Row>

    <Row>
      <Col s="12">
        <Switcher checked disabled />
      </Col>
    </Row>
  </>
));
