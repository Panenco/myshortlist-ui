import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import s from './styles.scss';

const Cell = ({ className, children, width, marginLeft, ...props }) => (
  <div
    className={cx(s.tableCell, className)}
    style={{
      width: `${width}`,
      marginLeft: marginLeft ? 'auto' : null,
    }}
    {...props}
  >
    {children}
  </div>
);

Cell.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  width: PropTypes.string,
  marginLeft: PropTypes.bool,
};

Cell.defaultProps = {
  className: null,
  children: null,
  width: '',
  marginLeft: false,
};

export { Cell };
