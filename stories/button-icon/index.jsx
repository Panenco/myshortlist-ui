import React from 'react';
import { ButtonIcon, Row, Col } from 'index';
import { decorator } from '../../utils/decorator';

export default decorator('ButtonIcon').add('ButtonIcon Component', () => (
  <>
    <Row>
      <Col s="12">
        {Object.values(ButtonIcon.icons).map(icon => (
          <ButtonIcon key={icon} icon={icon} />
        ))}
      </Col>
    </Row>
  </>
));
