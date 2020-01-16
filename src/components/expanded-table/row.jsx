import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import cx from 'classnames';

import s from './styles.scss';

const TableRow = ({ className, children, to, ...props }) => {
  return to ? (
    <Link {...props} to={to} className={cx(s.tableRow, className)}>
      {children}
    </Link>
  ) : (
    <div {...props} className={cx(s.tableRow, className)}>
      {children}
    </div>
  );
};

TableRow.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string,
  children: PropTypes.node,
};

TableRow.defaultProps = {
  className: null,
  to: null,
  children: null,
};

export { TableRow };
