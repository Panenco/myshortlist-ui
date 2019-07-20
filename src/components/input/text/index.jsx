import React from 'react';
import PropTypes from 'prop-types';

import cx from 'classnames';
import s from './styles.scss';

const TextInput = ({ className, ...props }) => (
  <input {...props} className={cx(s.input, props.error && s.inputError, className)} />
);

TextInput.propTypes = {
  className: PropTypes.string,
  error: PropTypes.string,
};

TextInput.defaultProps = {
  className: null,
  error: null,
};

export { TextInput };
