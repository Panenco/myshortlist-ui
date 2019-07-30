import React from 'react';
import { DragnDrop, Row, Col } from 'index';
import { decorator } from '../../utils/decorator';

export default decorator('DragnDrop').add('DragnDrop Component', () => (
  <>
    <Row>
      <Col s={12}>
        <DragnDrop />
      </Col>
    </Row>
  </>
));
