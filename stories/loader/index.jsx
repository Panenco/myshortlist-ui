import React from 'react';
import { SmallPreloader, RelativePreloader, Row, Col } from 'index';
import { decorator } from '../../utils/decorator';

export default decorator('Loader').add('Loader Component', () => (
  <>
    <Row>
      <Col s={12}>
        <SmallPreloader />
      </Col>
    </Row>

    <Row>
      <Col s={12}>
        <RelativePreloader />
      </Col>
    </Row>
  </>
));
