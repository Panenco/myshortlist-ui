import React from 'react';
import css from 'classnames';
import PropTypes from 'prop-types';

import s from './styles.scss';

const Row = ({ className, style, children }) => (
  <div className={css(s.row, className)} style={style}>
    {children}
  </div>
);

Row.defaultProps = {
  style: null,
  className: null,
  children: null,
};

Row.propTypes = {
  /* eslint-disable-next-line */
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node,
};

export { Row };
