import React from 'react';
import { OrientationCard, Row, Col } from 'index';
import { decorator } from '../../utils/decorator';

export default decorator('Card').add('OrientationCard Component', () => (
  <>
    <Row>
      <Col s="12">
        <OrientationCard free>
          Here you will perform a couple of test with your network to give you feedback from a 360 degree angle. Here
          you will qwerty qwerty qwerty qwerty qwerty qwerty
        </OrientationCard>
      </Col>
    </Row>

    <Row>
      <Col s="12">
        <OrientationCard>
          Here you will perform a couple of test with your network to give you feedback from a 360 degree angle. Here
          you will qwerty qwerty qwerty qwerty qwerty qwerty
        </OrientationCard>
      </Col>
    </Row>
  </>
));
