import React from 'react';
import { CultureMatch, Row, Col } from 'index';
import { decorator } from '../../utils/decorator';

export default decorator('CultureMatch').add('CultureMatch Component', () => (
  <>
    <Row>
      <Col s={6}>
        <CultureMatch percent={34}>Adhocracy</CultureMatch>
      </Col>
      <Col s={6}>
        <CultureMatch percent={63}>Hierarchy</CultureMatch>
      </Col>
    </Row>
  </>
));
