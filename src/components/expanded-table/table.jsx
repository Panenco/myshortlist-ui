import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Pagination } from 'components/pagination';

import s from './styles.scss';

const ExpandedTable = ({ className, children, ...props }) => {
  return (
    <div {...props} className={cx(s.table, className)}>
      {children}
    </div>
  );
};

ExpandedTable.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

ExpandedTable.defaultProps = {
  className: null,
  children: null,
};

export { ExpandedTable };
