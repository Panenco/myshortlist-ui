import React from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import PropTypes from 'prop-types';

import s from './styles.scss';

export const PaginationLink = ({ className, style, ...props }) => (
  <Link {...props} className={cx(s.pagination, s.paginationPrimary, className)} style={style}>
    {props.children}
  </Link>
);

PaginationLink.defaultProps = {
  style: null,
  className: null,
  children: null,
};

PaginationLink.propTypes = {
  /* eslint-disable-next-line */
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node,
};

export const PaginationLinkOutlined = ({ className, style, ...props }) => (
  <Link {...props} className={cx(s.pagination, s.paginationFlat, className)} style={style}>
    {props.children}
  </Link>
);

PaginationLinkOutlined.defaultProps = {
  style: null,
  className: null,
  children: null,
};

PaginationLinkOutlined.propTypes = {
  /* eslint-disable-next-line */
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node,
};
