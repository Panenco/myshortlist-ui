import React from 'react';
import { ImageDrop, Row, Col } from 'index';
import { decorator } from '../../../utils/decorator';

export default decorator('Input').add('Drop Component', () => (
  <>
    <Row>
      <Col s={5}>
        <ImageDrop value="https://storage.googleapis.com/shortlist-api/production/b9da5f13-2429-4033-895c-cae03fd84622.png" />{' '}
        <ImageDrop firstName="gh" lastName="hg" />
      </Col>
    </Row>
  </>
));
