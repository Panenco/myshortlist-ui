import React from 'react';
import PropTypes from 'prop-types';

import cx from 'classnames';
import s from './styles.scss';

const TextInput = ({ className, ...props }) => (
  <input className={cx(s.input, props.error && s.inputError, className)} {...props} />
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
