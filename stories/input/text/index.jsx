import React from 'react';
import { TextInput, Row, Col } from 'index';
import { decorator } from '../../../utils/decorator';

export default decorator('Input').add('TextInput Component', () => (
  <>
    <Row>
      <Col s={5}>
        <TextInput placeholder="Placeholder" />
      </Col>
    </Row>

    <Row>
      <Col s={5}>
        <TextInput placeholder="Placeholder" error />
      </Col>
    </Row>

    <Row>
      <Col s={5}>
        <TextInput placeholder="Placeholder" disabled />
      </Col>
    </Row>
  </>
));
