import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import s from './styles.scss';

const Radio = ({ value, name, id, disabled, labelLeft, labelRight, className, ...props }) => {
  return (
    <label htmlFor={id} className={cx(s.label, disabled && s.labelDisabled, className)}>
      {labelLeft && <span className={cx(s.labelTitle, s.labelTitleLeft)}>{labelLeft}</span>}
      <input type="radio" value={id} className={cx(s.checkbox)} name={name} id={id} {...props} />
      <div className={s.container}>
        <div className={s.point} />
      </div>
      {labelRight && <span className={cx(s.labelTitle, s.labelTitleRight)}>{labelRight}</span>}
    </label>
  );
};

Radio.propTypes = {
  labelLeft: PropTypes.string,
  labelRight: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
};

Radio.defaultProps = {
  labelLeft: null,
  labelRight: null,
  className: null,
  value: null,
  disabled: false,
};

export { Radio };
