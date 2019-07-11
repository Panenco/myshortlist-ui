import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import s from './styles.scss';

export const THeadRow = ({ children, className }) => <div className={cx(s.tableHeadRow, className)}>{children}</div>;

THeadRow.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

THeadRow.defaultProps = {
  children: null,
  className: '',
};

export const TBodyRow = ({ children, className }) => <div className={cx(s.tableBodyRow, className)}>{children}</div>;

TBodyRow.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

TBodyRow.defaultProps = {
  children: null,
  className: '',
};
