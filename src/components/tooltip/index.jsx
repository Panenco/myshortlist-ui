import React from 'react';
import PropTypes from 'prop-types';

import s from './styles.scss';

const Tooltip = ({ message, children }) => (
  <div className={s.tooltip}>
    <div className={s.tooltipMessage}>{message}</div>
    {children}
  </div>
);

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  message: PropTypes.string.isRequired,
};

export { Tooltip };
