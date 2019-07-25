import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Icon } from 'components/icon';
import s from './styles.scss';

const ButtonIconWrapper = ({ type, className, children, ...props }) => (
  <button type={type} className={cx(s.button, s.buttonIcon, className)} {...props}>
    {children}
  </button>
);

ButtonIconWrapper.propTypes = {
  type: PropTypes.oneOf(['submit', 'reset', 'button']),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

ButtonIconWrapper.defaultProps = {
  type: 'button',
  className: null,
};

export const ButtonIcon = ({ iconClassName, icon, ...props }) => (
  <ButtonIconWrapper {...props}>
    <Icon.Large icon={icon} className={cx(s.buttonIconItem, iconClassName)} />
  </ButtonIconWrapper>
);

ButtonIcon.defaultProps = {
  iconClassName: null,
};

ButtonIcon.propTypes = {
  iconClassName: PropTypes.string,
  icon: PropTypes.oneOf(Object.values(Icon.icons)).isRequired,
};

ButtonIcon.Small = ({ iconClassName, icon, ...props }) => (
  <ButtonIconWrapper {...props}>
    <Icon icon={icon} className={cx(s.buttonIconItem, iconClassName)} />
  </ButtonIconWrapper>
);

ButtonIcon.icons = Icon.icons;

ButtonIcon.Small.defaultProps = {
  iconClassName: null,
};

ButtonIcon.Small.propTypes = {
  iconClassName: PropTypes.string,
  icon: PropTypes.oneOf(Object.values(Icon.icons)).isRequired,
};
