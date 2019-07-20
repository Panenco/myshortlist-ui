import React from 'react';
import { Tooltip, Row, Col } from 'index';
import { decorator } from '../../utils/decorator';

export default decorator('Tooltip').add('Tooltip Component', () => (
  <>
    <Row>
      <Col s={12}>
        <Tooltip message="Message">Msg</Tooltip>
      </Col>
    </Row>
  </>
));
