import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import cx from 'classnames';
import s from './styles.scss';

export const Tabs = ({ className, children }) => <div className={cx(s.nav, className)}>{children}</div>;

Tabs.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
Tabs.defaultProps = {
  className: null,
};

export const TabItem = ({ to, children, ...props }) => (
  <NavLink to={to} className={s.navTab} activeClassName={cx(s.navTabActive)} {...props}>
    {children}
  </NavLink>
);

TabItem.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};

export const TabItemFake = ({ last, active, children }) => (
  <span className={cx(s.navTab, active && s.navTabactive, last && s.navTabLast)}>{children}</span>
);

TabItemFake.propTypes = {
  last: PropTypes.bool,
  active: PropTypes.bool,
  children: PropTypes.node,
};

TabItemFake.defaultProps = {
  last: false,
  active: false,
  children: null,
};
