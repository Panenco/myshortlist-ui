import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import s from './styles.scss';

const Switcher = ({ id, checked, name, disabled, label, className, ...props }) => (
  <label htmlFor={id} className={cx(disabled && s.disabled, className)}>
    {label && <span className={s.labelTitle}>{label}</span>}
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
  </label>
);

Switcher.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  className: PropTypes.string,
};

Switcher.defaultProps = {
  name: null,
  checked: false,
  disabled: false,
  label: null,
  className: null,
};

export { Switcher };
