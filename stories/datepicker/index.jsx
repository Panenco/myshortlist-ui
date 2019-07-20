import React from 'react';
import { DatePicker, Row, Col } from 'index';
import { decorator } from '../../utils/decorator';

export default decorator('DatePicker').add('DatePicker Component', () => (
  <>
    <Row>
      <Col s={5}>
        <DatePicker hasRange onChange={value => value} />
      </Col>
    </Row>

    <Row>
      <Col s={5}>
        <DatePicker error onChange={value => value} />
      </Col>
    </Row>

    <Row>
      <Col s={5}>
        <DatePicker disabled />
      </Col>
    </Row>
  </>
));
