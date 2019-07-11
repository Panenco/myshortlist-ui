import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import s from './styles.scss';

export const ButtonLink = ({ disabled, className, children, ...props }) => (
  <Link className={cx(s.button, s.buttonLink, disabled && s.buttonLinkDisabled, className)} {...props}>
    {children}
  </Link>
);

ButtonLink.defaultProps = {
  disabled: false,
  className: null,
};

ButtonLink.propTypes = {
  disabled: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
