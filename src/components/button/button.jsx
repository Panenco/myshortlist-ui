import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import s from './button.scss';

const buttonPropTypes = {
  shared: PropTypes.bool,
  type: PropTypes.oneOf(['submit', 'reset', 'button']),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export const PrimaryButton = ({ type, className, children, shared, ...props }) => (
  <button type={type} className={cx(s.button, s.buttonPrimary, shared && s.buttonShared, className)} {...props}>
    {children}
  </button>
);

PrimaryButton.defaultProps = {
  type: 'button',
  className: null,
  shared: false,
};

PrimaryButton.propTypes = buttonPropTypes;

PrimaryButton.Large = ({ className, shared, ...props }) => (
  <PrimaryButton className={cx(s.buttonLarge, shared && s.buttonShared, className)} {...props} />
);

PrimaryButton.Large.defaultProps = {
  type: 'button',
  className: null,
  shared: false,
};

PrimaryButton.Large.propTypes = buttonPropTypes;

export const SecondaryButton = ({ type = 'button', className, children, ...props }) => (
  <button type={type} className={cx(s.button, s.buttonSecondary, className)} {...props}>
    {children}
  </button>
);

SecondaryButton.defaultProps = {
  type: 'button',
  className: null,
  shared: false,
};

SecondaryButton.propTypes = buttonPropTypes;

SecondaryButton.Large = ({ className, ...props }) => (
  <SecondaryButton className={cx(s.buttonLarge, className)} {...props} />
);

SecondaryButton.Large.defaultProps = {
  type: 'button',
  className: null,
  shared: false,
};

SecondaryButton.Large.propTypes = buttonPropTypes;
