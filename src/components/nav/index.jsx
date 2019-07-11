import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';
import cx from 'classnames';
import s from './styles.scss';

export const Tabs = withRouter(({ className, children }) => (
  // console.log(location);
  <div className={cx(s.nav, className)}>{children}</div>
));

export const TabItem = withRouter(({ to, children, location, last, ...props }) => (
  <span>
    <NavLink to={to} className={s.navTab} activeClassName={cx(s.navTabActive, last && s.navTabLast)} {...props}>
      {children}
    </NavLink>
  </span>
));

export const TabItemFake = ({ last, active, children }) => (
  <span>
    <span className={cx(s.navTab, active && s.navTabactive, last && s.navTabLast)}>{children}</span>
  </span>
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
