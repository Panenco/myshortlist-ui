import React from 'react';
import PropTypes from 'prop-types';

import cx from 'classnames';
import s from './styles.scss';

const Input = ({ className, ...props }) => (
  <input {...props} className={cx(s.input, props.error && s.inputError, className)} />
);

Input.propTypes = {
  className: PropTypes.string,
  error: PropTypes.string,
};

Input.defaultProps = {
  className: null,
  error: null,
};

export { Input };
