import React from 'react';
import { Col } from 'components/grid';
import cx from 'classnames';
import PropTypes from 'prop-types';
import s from './styles.scss';

const ScaleBlock = ({ children, questions, done }) => {
  const doneRate = {
    width: `${(done * 100) / questions}%`,
  };

  const notStarted = done === 0;

  return (
    <Col s={questions > 12 ? 12 : questions} className={s.block}>
      <div className={cx(s.blockName, notStarted && s.blockNameNotStarted)}>{children}</div>
      <div className={s.blockRate}>
        <div className={s.blockRateDone} style={doneRate} />
      </div>
    </Col>
  );
};

ScaleBlock.propTypes = {
  children: PropTypes.node.isRequired,
  questions: PropTypes.number.isRequired,
  done: PropTypes.number.isRequired,
};

export { ScaleBlock };
