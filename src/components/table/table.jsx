import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import s from './styles.scss';

const Table = ({ children, className }) => <div className={cx(s.table, className)}>{children}</div>;

Table.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Table.defaultProps = {
  children: null,
  className: '',
};

export { Table };
