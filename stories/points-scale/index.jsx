import React from 'react';
import { PointsScale, Col, Row } from 'index';
import { decorator } from '../../utils/decorator';

export default decorator('PointsScale').add('PointsScale Component', () => (
  <>
    <Row>
      <Col s={12}>
        <PointsScale used={5} />
      </Col>
    </Row>

    <Row>
      <Col s={12}>
        <PointsScale used={45} />
      </Col>
    </Row>

    <Row>
      <Col s={12}>
        <PointsScale used={85} />
      </Col>
    </Row>

    <Row>
      <Col s={12}>
        <PointsScale used={100} />
      </Col>
    </Row>
    <Row>
      <Col s={12}>
        <PointsScale used={0} />
      </Col>
    </Row>
  </>
));
