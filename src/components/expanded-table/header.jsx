import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import s from './styles.scss';

const Header = ({ className, children, ...props }) => (
  <div {...props} className={cx(s.tableHeader, className)}>
    {children}
  </div>
);

Header.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

Header.defaultProps = {
  className: null,
  children: null,
};

export { Header };
