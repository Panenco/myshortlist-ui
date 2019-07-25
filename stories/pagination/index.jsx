import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Pagination, Row, Col } from 'index';
import { decorator } from '../../utils/decorator';

export default decorator('Pagination').add('Pagination Component', () => (
  <BrowserRouter>
    <Row>
      <Col s={5}>
        <Pagination
          current={Number(0)}
          totalItems={201}
          formatUrl={p => `/therapists/page/${p}`}
          itemsPerPage={10}
          // onPagination={onPagination}
        />
      </Col>
    </Row>
  </BrowserRouter>
));
