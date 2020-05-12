import React from 'react';
import { Col } from 'components/grid';
import cx from 'classnames';
import PropTypes from 'prop-types';
import s from './styles.scss';

const ScaleBlock = ({ children, questions, testsCount, done }) => {
  const doneRate = {
    width: `${(done * 100) / questions}%`,
  };

  const notStarted = done === 0;

  return (
    <Col s={12} className={s.block} style={{ width: `${100 / testsCount}%` }}>
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
  testsCount: PropTypes.number.isRequired,
  done: PropTypes.number.isRequired,
};

export { ScaleBlock };
