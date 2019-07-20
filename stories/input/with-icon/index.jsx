import React from 'react';
import { WithIconInput, Icon, Row, Col } from 'index';
import { decorator } from '../../../utils/decorator';

export default decorator('Input').add('WithIconInput Component', () => (
  <>
    <Row>
      <Col s={5}>
        <WithIconInput placeholder="Search" before={Icon.icons.search} />
      </Col>

      <Col s={5}>
        <WithIconInput placeholder="Date" after={Icon.icons.calendar} />
      </Col>
    </Row>

    <Row>
      <Col s={5}>
        <WithIconInput error placeholder="Search" before={Icon.icons.search} />
      </Col>

      <Col s={5}>
        <WithIconInput error placeholder="Date" after={Icon.icons.calendar} />
      </Col>
    </Row>

    <Row>
      <Col s={5}>
        <WithIconInput disabled placeholder="Search" before={Icon.icons.search} />
      </Col>

      <Col s={5}>
        <WithIconInput disabled placeholder="Date" after={Icon.icons.calendar} />
      </Col>
    </Row>
  </>
));
