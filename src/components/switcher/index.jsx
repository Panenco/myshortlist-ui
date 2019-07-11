import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import s from './styles.scss';

const Switcher = ({ id, checked, onClick, ...props }) => (
  <button onClick={onClick} htmlFor={id} className={cx(s.switcher, checked && s.switcher_active)}>
    <input type="checkbox" id={id} className={checked ? cx(s.switcher_on) : cx(s.switcher_off)} {...props} />
    <div className={cx(s.switcher_slider)} />
  </button>
);

Switcher.propTypes = {
  id: PropTypes.string,
  checked: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

Switcher.defaultProps = {
  id: false,
  checked: false,
};

export { Switcher };
