import React from 'react';
import { DatePickerMulti, DatePickerSingle, Row, Col } from 'index';
import { decorator } from '../../utils/decorator';

export default decorator('DatePicker').add('DatePicker Component', () => (
  <>
    <Row>
      <p>Multi date picker:</p>
    </Row>
    <Row>
      <Col s={5}>
        <DatePickerMulti hasRange onChange={value => value} />
      </Col>
    </Row>

    <Row>
      <Col s={5}>
        <DatePickerMulti error onChange={value => value} />
      </Col>
    </Row>

    <Row>
      <Col s={5}>
        <DatePickerMulti disabled />
      </Col>
    </Row>

    <Row>
      <p>Single date picker:</p>
    </Row>
    <Row>
      <Col s={5}>
        <DatePickerSingle hasRange onChange={value => value} />
      </Col>
    </Row>

    <Row>
      <Col s={5}>
        <DatePickerSingle error onChange={value => value} />
      </Col>
    </Row>

    <Row>
      <Col s={5}>
        <DatePickerSingle disabled />
      </Col>
    </Row>
  </>
));
