import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import s from './styles.scss';

const Sidebar = ({ className, children }) => {
  return <div className={cx(s.sidebar, className)}>{children}</div>;
};

Sidebar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Sidebar.defaultProps = {
  className: null,
};

export { Sidebar };
export { Item } from './item';
