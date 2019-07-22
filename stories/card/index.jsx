import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { OrientationCard, CourseCard, Row, Col } from 'index';
import { decorator } from '../../utils/decorator';

export default decorator('Card').add('OrientationCard Component', () => (
  <BrowserRouter>
    <Row>
      <Col s="12">
        <OrientationCard free>
          Here you will perform a couple of test with your network to give you feedback from a 360 degree angle. Here
          you will qwerty qwerty qwerty qwerty qwerty qwerty
        </OrientationCard>
      </Col>
    </Row>

    <Row>
      <Col s="12">
        <OrientationCard price>
          Here you will perform a couple of test with your network to give you feedback from a 360 degree angle. Here
          you will qwerty qwerty qwerty qwerty qwerty qwerty
        </OrientationCard>
      </Col>
    </Row>

    <Row>
      <Col s="12">
        <OrientationCard bought done={4}>
          Here you will perform a couple of test with your network to give you feedback from a 360 degree angle. Here
          you will qwerty qwerty qwerty qwerty qwerty qwerty
        </OrientationCard>
      </Col>
    </Row>
  </BrowserRouter>
));

export const CourseCardStory = decorator('Card').add('CourseCard Component', () => (
  <>
    <Row>
      <Col s="12">
        <CourseCard free />
      </Col>
    </Row>

    <Row>
      <Col s="12">
        <CourseCard bought />
      </Col>
    </Row>

    <Row>
      <Col s="12">
        <CourseCard price />
      </Col>
    </Row>
  </>
));
