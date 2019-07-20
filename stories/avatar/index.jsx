import React from 'react';
import { Avatar, Row, Col } from 'index';
import { decorator } from '../../utils/decorator';

export default decorator('Avatar').add('Avatar Component', () => (
  <>
    <Row>
      <Col s="12">
        <Avatar header />
      </Col>
    </Row>
  </>
));
