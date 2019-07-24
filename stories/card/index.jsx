import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { OrientationCard, CourseCard, MindMapCard, Row, Col } from 'index';
import { decorator } from '../../utils/decorator';

export default decorator('Card').add('OrientationCard Component', () => (
  <BrowserRouter>
    <Row>
      <Col s="12">
        <OrientationCard title="Your personal brand" price={0}>
          Here you will perform a couple of test with your network to give you feedback from a 360 degree angle. Here
          you will qwerty qwerty qwerty qwerty qwerty qwerty
        </OrientationCard>
      </Col>
    </Row>

    <Row>
      <Col s="12">
        <OrientationCard title="Your personal brand" price={14.99}>
          Here you will perform a couple of test with your network to give you feedback from a 360 degree angle. Here
          you will qwerty qwerty qwerty qwerty qwerty qwerty
        </OrientationCard>
      </Col>
    </Row>

    <Row>
      <Col s="12">
        <OrientationCard title="Your personal brand" bought done={4}>
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
        <CourseCard title="React for beginners" price={0} rating={1} voted={25} />
      </Col>
    </Row>

    <Row>
      <Col s="12">
        <CourseCard title="React for beginners" bought rating={4.5} voted={101} />
      </Col>
    </Row>

    <Row>
      <Col s="12">
        <CourseCard title="React for beginners" price={14.99} rating={3.2} voted={89} />
      </Col>
    </Row>

    <Row>
      <Col s="12">
        <CourseCard title="React for beginners" price={26.99} newPrice={14.99} rating={5} voted={47} />
      </Col>
    </Row>
  </>
));

export const MindMapCardStory = decorator('Card').add('MindMapCard Component', () => (
  <>
    <Row>
      <Col s="12">
        <MindMapCard title="Generic competences" done={0}>
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
        <MindMapCard title="Generic competences" done={4}>
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
        <MindMapCard title="Generic competences" done={7}>
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
