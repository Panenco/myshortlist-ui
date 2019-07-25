import React from 'react';
import { Comment, Row, Col } from 'index';
import { decorator } from '../../utils/decorator';

export default decorator('Comment').add('Comment Component', () => (
  <>
    <Row>
      <Col s="12">
        <Comment.Large>
          This is a dynamic and creative work environment. Employees take risks, and leaders are seen as innovators and
          risk-takers. Experiments and innovation are the fabric of this kind of organisation. As its long-term goal is
          to grow and create new resources, the definition of success is launching new products or services. Prominence
          is emphasised and individual initiative and freedom are promoted. If this is your preferred culture, you might
          want to look for a job in start-ups or smaller companies that are innovative or active in innovation, sales
          and marketing. Alternatively, you may want to start your own company.
        </Comment.Large>
      </Col>
    </Row>

    <Row>
      <Col s="12">
        <Comment>
          You have an overriding need to do things your own way, independent of other people`s control. You have an
          aversion to being tightly managed and do your best work when your supervisor trusts your competence and allows
          you to choose your own pace, schedule, lifestyle and work habits.
        </Comment>
      </Col>
    </Row>
  </>
));
