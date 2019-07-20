import React from 'react';
import { Match, Row, Col } from 'index';
import { decorator } from '../../utils/decorator';

export default decorator('Match').add('Match Component', () => (
  <>
    <Row>
      <Col s={6}>
        <Match>Adhocracy</Match>
      </Col>
      <Col s={6}>
        <Match matched>Hierarchy</Match>
      </Col>
    </Row>
  </>
));
