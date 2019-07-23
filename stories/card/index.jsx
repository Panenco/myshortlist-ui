import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { OrientationCard, CourseCard, MindMapCard, Row, Col } from 'index';
import { decorator } from '../../utils/decorator';

export default decorator('Card').add('OrientationCard Component', () => (
  <BrowserRouter>
    <Row>
      <Col s="12">
        <OrientationCard price={0} title="Your personal brand" subTitle="19/07/2019">
          Here you will perform a couple of test with your network to give you feedback from a 360 degree angle. Here
          you will qwerty qwerty qwerty qwerty qwerty qwerty
        </OrientationCard>
      </Col>
    </Row>

    <Row>
      <Col s="12">
        <OrientationCard price={14} title="Your personal brand" subTitle="19/07/2019">
          Here you will perform a couple of test with your network to give you feedback from a 360 degree angle. Here
          you will qwerty qwerty qwerty qwerty qwerty qwerty
        </OrientationCard>
      </Col>
    </Row>

    <Row>
      <Col s="12">
        <OrientationCard bought done={4} title="Your personal brand" subTitle="Bought 19/07/2019">
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
        <CourseCard price={0} title="React for beginners" subTitle="09/07/2018" />
      </Col>
    </Row>

    <Row>
      <Col s="12">
        <CourseCard bought title="React for beginners" subTitle="Bought 09/07/2018" />
      </Col>
    </Row>

    <Row>
      <Col s="12">
        <CourseCard price title="React for beginners" subTitle="09/07/2018" />
      </Col>
    </Row>
  </>
));

export const MindMapCardStory = decorator('Card').add('MindMapCard Component', () => (
  <>
    <Row>
      <Col s="12">
        <MindMapCard done={0} title="Generic competences">
          <ul>
            <li>Communication</li>
            <li>Activity</li>
            <li>Hosting</li>
            <li>Negotiating</li>
          </ul>
        </MindMapCard>
      </Col>
    </Row>

    <Row>
      <Col s="12">
        <MindMapCard done={4} title="Generic competences">
          <ul>
            <li>Communication</li>
            <li>Activity</li>
            <li>Hosting</li>
            <li>Negotiating</li>
          </ul>
        </MindMapCard>
      </Col>
    </Row>

    <Row>
      <Col s="12">
        <MindMapCard done={7} title="Generic competences">
          <ul>
            <li>Communication</li>
            <li>Activity</li>
            <li>Hosting</li>
            <li>Negotiating</li>
          </ul>
        </MindMapCard>
      </Col>
    </Row>
  </>
));
