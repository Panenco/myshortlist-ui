import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import s from './styles.scss';

const CardChips = ({ children, className }) => <span className={cx(s.chips, className)}>{children}</span>;

CardChips.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

CardChips.defaultProps = {
  className: null,
};

export { CardChips };
