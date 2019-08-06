import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import s from './styles.scss';

const CompletionRate = ({ completion, sections, className }) => {
  const completionRate = {
    width: `${(completion * 100) / sections}%`,
  };
  return (
    <div className={cx(s.rate, className)}>
      <span className={cx(s.rateCompletion, completion === 0 && s.rateCompletionNothing)}>
        {completion} out of {sections} sections
      </span>
      <div className={s.rateIndicator}>
        <div className={s.rateIndicatorCompletionLine} style={completionRate} />
      </div>
    </div>
  );
};

CompletionRate.propTypes = {
  completion: PropTypes.number.isRequired,
  sections: PropTypes.number.isRequired,
  className: PropTypes.string,
};

CompletionRate.defaultProps = {
  className: null,
};

export { CompletionRate };
