import React from 'react';
import { Icon, Row, Col } from 'index';
import { decorator } from '../../utils/decorator';

export default decorator('Icon').add('Icon Component', () => (
  <>
    <Row>
      <Col s="12">
        {Object.values(Icon.icons).map(icon => (
          <Icon.Large key={icon} icon={icon} />
        ))}
      </Col>
    </Row>

    <Row>
      <Col s="12">
        {Object.values(Icon.icons).map(icon => (
          <Icon key={icon} icon={icon} />
        ))}
      </Col>
    </Row>
  </>
));
