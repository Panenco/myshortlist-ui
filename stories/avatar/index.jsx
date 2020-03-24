import React from 'react';
import { Avatar, Row, Col } from 'index';
import { decorator } from '../../utils/decorator';

export default decorator('Avatar').add('Avatar Component', () => (
  <>
    <Row>
      <Col s="5">
        <Avatar header />
      </Col>
      <Col s="5">
        <Avatar
          header
          imgSrc="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        />
      </Col>
    </Row>
  </>
));
