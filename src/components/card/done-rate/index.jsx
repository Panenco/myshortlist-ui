import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import s from './styles.scss';

const DoneRate = ({ done, className }) => {
  const doneRate = {
    width: `${(done * 100) / 7}%`,
  };
  return (
    <div className={cx(s.rate, className)}>
      <span className={cx(s.rateDone, done === 0 && s.rateDoneNothing)}>{done} out of 7 sections done</span>
      <div className={s.rateIndicator}>
        <div className={s.rateIndicatorDoneLine} style={doneRate} />
      </div>
    </div>
  );
};

DoneRate.propTypes = {
  done: PropTypes.number.isRequired,
  className: PropTypes.string,
};

DoneRate.defaultProps = {
  className: null,
};

export { DoneRate };
