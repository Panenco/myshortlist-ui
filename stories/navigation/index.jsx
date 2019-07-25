import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Tabs, TabItem, Row, Col } from 'index';
import { decorator } from '../../utils/decorator';

export default decorator('Navigation').add('Navigation Component', () => (
  <BrowserRouter>
    <Row>
      <Col s={12}>
        <Tabs>
          <TabItem to="/tab1">Tab 1</TabItem>
          <TabItem to="/tab2">Tab 2</TabItem>
          <TabItem to="/tab3">Tab 3</TabItem>
        </Tabs>
      </Col>
    </Row>
  </BrowserRouter>
));
