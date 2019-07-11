import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import s from './styles.scss';

const Card = ({ children, className }) => <div className={cx(s.card, className)}>{children}</div>;

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Card.defaultProps = {
  className: null,
};

export { Card };
