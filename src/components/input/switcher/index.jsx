import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import s from './styles.scss';

const Switcher = ({ id, checked, name, disabled, labelLeft, labelRight, className, ...props }) => (
  <label htmlFor={id} className={cx(s.wrapper, disabled && s.disabled, className)}>
    {labelLeft && <span className={cx(s.labelTitle, s.labelTitleLeft)}>{labelLeft}</span>}
    <button className={cx(s.switcher, checked && s.switcher_active)}>
      <input
        type="checkbox"
        id={id}
        name={name}
        checked={checked}
        disabled={disabled}
        className={checked ? cx(s.switcher_on) : cx(s.switcher_off)}
        {...props}
      />
      <div className={cx(s.switcher_slider)} />
    </button>
    {labelRight && <span className={cx(s.labelTitle, s.labelTitleRight)}>{labelRight}</span>}
  </label>
);

Switcher.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  labelLeft: PropTypes.string,
  labelRight: PropTypes.string,
  className: PropTypes.string,
};

Switcher.defaultProps = {
  name: null,
  checked: false,
  disabled: false,
  labelLeft: null,
  labelRight: null,
  className: null,
};

export { Switcher };
