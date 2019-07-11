import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import s from './styles.scss';

export const THeadCell = ({ children, className, width, noPad, noFlexGrow }) => {
  const styles = {
    flexGrow: noFlexGrow ? 0 : 1,
    paddingRight: noPad ? 0 : '32px',
    width: `${width}`,
  };
  return (
    <div className={cx(s.tableHeadRowCell, className)} style={styles}>
      {children}
    </div>
  );
};

THeadCell.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  width: PropTypes.string,
  noPad: PropTypes.bool,
  noFlexGrow: PropTypes.bool,
};

THeadCell.defaultProps = {
  children: null,
  className: '',
  width: '',
  noPad: false,
  noFlexGrow: false,
};

export const TBodyCell = ({ children, className, width, noPad, noFlexGrow }) => {
  const styles = {
    flexGrow: noFlexGrow ? 0 : 1,
    paddingRight: noPad ? 0 : '32px',
    width: `${width}`,
  };
  return (
    <div className={cx(s.tableBodyRowCell, className)} style={styles}>
      {children}
    </div>
  );
};

TBodyCell.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  width: PropTypes.string,
  noPad: PropTypes.bool,
  noFlexGrow: PropTypes.bool,
};

TBodyCell.defaultProps = {
  children: null,
  className: '',
  width: '',
  noPad: false,
  noFlexGrow: false,
};

export const EmptyCell = ({ children, className, noPad, noFlexGrow, width, ...props }) => {
  const styles = {
    flexGrow: noFlexGrow ? 0 : 1,
    paddingRight: noPad ? 0 : '32px',
    width: `${width}`,
  };
  return <div className={cx(s.tableEmptyCell, className)} style={styles} {...props} />;
};

EmptyCell.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  width: PropTypes.string,
  noPad: PropTypes.bool,
  noFlexGrow: PropTypes.bool,
};

EmptyCell.defaultProps = {
  children: null,
  className: '',
  width: '',
  noPad: false,
  noFlexGrow: false,
};
